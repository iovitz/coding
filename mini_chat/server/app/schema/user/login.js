module.exports = {
  properties: {
    username: {
      type: 'string',
      pattern: '^[0-9a-zA-Z_]{2,20}$',
    },
    password: {
      type: 'string',
      pattern: '^[0-9a-zA-Z_]{2,20}$',
    },
  },
  required: [ 'username', 'password' ],
};
