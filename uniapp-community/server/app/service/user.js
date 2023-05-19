const Service = require('egg').Service;

module.exports = class UserService extends Service {
  async sendRegisterCode(phone, code) {
    return this.ctx.helper.aliyun.sendRegisterCode(phone, code);
  }
};
