'use strict';
const BaseController = require('../core/bases/base.controller');


class HomeController extends BaseController {
  async register() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    const res = await ctx.validate('schema.user.register', body);
    if (!res) {
      return ctx.clientError('参数错误');
    }
    const { nickname, username, password } = body;

    if (await ctx.service.user.checkUsernameExists(username)) {
      return ctx.clientError('用户已存在');
    }
    const user = await ctx.service.user.createUser(
      nickname,
      username,
      password
    );

    return ctx.success({
      ...user,
      token: app.jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        app.config.jwt.secret
      ),
    });
  }

  async login() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    const res = await ctx.validate('schema.user.login', body);
    if (!res) {
      return ctx.clientError('参数错误');
    }
    const { username, password } = body;
    const user = await ctx.service.user.findUserByUsernameAndPassword(username, password);
    if (!user) {
      return ctx.clientError('账号名或密码错误');
    }
    console.log(user.id, user.username);
    return ctx.success({
      ...user,
      token: app.jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        app.config.jwt.secret
      ),
    });
  }

  async findUsers(ctx) {
    const { request } = ctx;
    const { body } = request;
    const res = await ctx.validate('schema.user.findUser', body);
    if (!res) {
      return this.ctx.clientError('参数错误');
    }

    console.log(body.content);

    return ctx.success(
      await ctx.service.user.findUserByUsernameAndNickname(body.content)
    );
  }
}

module.exports = HomeController;
