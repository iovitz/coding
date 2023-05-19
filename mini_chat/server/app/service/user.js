const Service = require('egg').Service;

module.exports = class UserService extends Service {

  async checkUsernameExists(username) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username,
      },
      attributes: [ 'id' ],
    });
    return Boolean(user);
  }

  async createUser(nickname, username, password) {
    console.log(nickname, username, password);
    const user = await this.ctx.model.User.create({
      nickname,
      username,
      password: await this.ctx.helper.bcryptEncode(password),
    });
    await this.ctx.model.UserInfo.create({
      uid: user.id,
    });
    return {
      id: user.id,
      nickname,
      username,
      avatar: user.avatar || null,
      description: user.description || null,
      gender: user.gender || null,
      email: user.email || null,
    };
  }

  async findUserByUsernameAndPassword(username, password) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username,
        status: 1,
      },
      attributes: [ 'id', 'password', 'nickname', 'avatar', 'gender', 'email' ],
    });
    if (!user) return null;
    const passwordMatch = await this.ctx.helper.bcryptCompare(password, user.password);
    if (!passwordMatch) return null;
    return {
      id: user.id,
      nickname: user.nickname || null,
      username,
      avatar: user.avatar || null,
      description: user.description || null,
      gender: user.gender || null,
      email: user.email || null,
    };
  }

  async findUserByUsernameAndNickname(content) {
    const Op = this.app.Sequelize.Op;
    return this.ctx.model.User.findAll({
      where: {
        [Op.or]: [
          {
            nickname: {
              [Op.like]: `%${content}%`,
            },
          },
          {
            username: content,
          },
        ],
      },
      attributes: [ 'nickname', 'avatar', 'username' ],
    }).catch(e => {
      console.log(e.message);
    });
  }
};
