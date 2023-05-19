const SMSClient = require('@alicloud/sms-sdk');
const { accessKeyId, secretAccessKey } = require('../../config/local');
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
};
