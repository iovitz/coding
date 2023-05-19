
const whiteList = [ '/api/user/login', '/api/user/register' ];


module.exports = () => {
  return async function(ctx, next) {
    // 判断接口路径是否在白名单（在 “router 中使用中间件”中不需要验证这一步）
    const isInWhiteList = whiteList.some(item => {
      return ctx.request.url === item;
    });
    if (!isInWhiteList) {
      // 拿到前端传过来的 token
      const token = ctx.request.header.authorization;
      if (token) {
        // 解密token
        try {

          const user = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
          if (!user) {
            return ctx.unauthorized();
          }
          ctx.user = user;
        } catch (e) {
          return ctx.unauthorized('Invalid Token');
        }
        await next();
      } else {
        return ctx.unauthorized('Miss Token');
      }
    } else {
      await next();
    }
  };
};
