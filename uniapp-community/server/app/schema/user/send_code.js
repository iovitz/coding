module.exports = {
  properties: {
    phone: { type: 'string', maxLength: 11, minLength: 11 },
  },
  required: [ 'phone' ],
};
