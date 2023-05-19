module.exports = {
  success(data, msg = 'success') {
    this.status = 200;
    this.body = {
      code: 0,
      data,
      msg,
    };
  },
  clientError(msg = 'Bad Request') {
    this.status = 400;
    this.body = {
      code: 40000,
      msg,
    };
  },
  unauthorized(msg = 'Unauthorized') {
    this.status = 401;
    this.body = {
      code: 40001,
      msg,
    };
  },
  forbidden(msg = 'Forbidden') {
    this.status = 403;
    this.body = {
      code: 40003,
      msg,
    };
  },
  notFound(msg = 'Not Found') {
    this.status = 404;
    this.body = {
      code: 40004,
      msg,
    };
  },
  serverError(msg = 'Internal Server Error') {
    this.status = 500;
    this.body = {
      code: 50000,
      msg,
    };
  },
  notImplemented(msg = 'Not Implemented') {
    this.status = 501;
    this.body = {
      code: 50001,
      msg,
    };
  },
  unavailable(msg = 'Unavailable') {
    this.status = 503;
    this.body = {
      code: 50003,
      msg,
    };
  },
};
