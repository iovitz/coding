module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);
      ctx.logger.error(err);
      ctx.clientError();
    }
  };
};
