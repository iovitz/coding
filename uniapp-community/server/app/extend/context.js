module.exports = {
  success(data, msg = 'success') {
    this.status = 200;
    this.body = {
      code: 0,
      data,
      msg,
    };
  },
  paramsError(msg = 'Client Error') {
    this.status = 40000;
    this.body = {
      code: 200,
      msg,
    };
  },
  serverError(msg = 'Server Error') {
    this.status = 500;
    this.body = {
      code: 50000,
      msg,
    };
  },
  loginRequest(msg = 'Login Request') {
    this.status = 403;
    this.body = {
      code: 50000,
      msg,
    };
  },
};
