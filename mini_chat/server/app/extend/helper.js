const SMSClient = require('@alicloud/sms-sdk');
const { accessKeyId, secretAccessKey } = require('../../config/local');
const bcrypt = require('bcrypt');
// 初始化sms_client
const smsClient = new SMSClient({
  accessKeyId,
  secretAccessKey,
});

module.exports = {
  aliyun: {
    sendRegisterCode(phone, code) {
      return smsClient.sendSMS({
        PhoneNumbers: phone,
        SignName: '阿里云短信测试',
        TemplateCode: 'SMS_154950909',
        TemplateParam: `{"code":"${code}"}`,
      });
    },
  },
  getVerifyCode(length) {
    return Math.random()
      .toString()
      .substring(
        3, 3 + length
      );
  },
  bcryptEncode(str) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt().then((salt, err) => {
        if (err) reject(err);
        bcrypt.hash(str, salt, (err, hash) => {
          if (err) reject(err);
          resolve(hash);
        });
      });
    });
  },
  bcryptCompare(str, hash) {
    // _pass传递过来的密码，password是数据库中的密码
    return new Promise((resolve, reject) => {
      console.log(str, hash);
      bcrypt.compare(str, hash, (err, isMath) => {
        if (!err) {
          resolve(isMath);
        } else {
          reject(err);
        }
      });
    });
  },
};
