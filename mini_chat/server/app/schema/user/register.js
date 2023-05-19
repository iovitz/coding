module.exports = {
  properties: {
    nickname: {
      type: 'string',
      maxLength: 20,
      minLength: 2,
    },
    username: {
      type: 'string',
      pattern: '^[0-9a-zA-Z_]{2,20}$',
    },
    password: {
      type: 'string',
      pattern: '^[0-9a-zA-Z_]{2,20}$',
    },
  },
  required: [ 'nickname', 'username', 'password' ],
};
