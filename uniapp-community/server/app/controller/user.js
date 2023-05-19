'use strict';

const BaseController = require('../core/base.controller');

class HomeController extends BaseController {
  async sendCode({ request: { body } }) {
    const { ctx } = this;
    const res = await ctx.validate('schema.user.sendCode', body);
    if (!res) {
      return this.ctx.paramsError();
    }
    const code = ctx.helper.getVerifyCode(4);
    await ctx.service.user.sendRegisterCode(body.phone, code);
    await ctx.model.VerifyCode.create({
      code,
      fingerprint: Date.now(),
    });
    return this.ctx.success('发送成功');
  }
}

module.exports = HomeController;
