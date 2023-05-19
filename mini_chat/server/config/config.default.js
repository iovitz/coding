const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1680272953120_6265';

  config.middleware = [ 'errorHandler', 'tokenVerify' ];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.ajv = {
    keyword: 'schema', // to indicate the namespace and path of schemas, default as 'schema'
    allErrors: true, // required for custom error message
    jsonPointers: true, // required for custom error message
  };

  config.jwt = {
    secret: 'hahahahaha',
  };

  // static files and cache files
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'static'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 0, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };

  return {
    ...config,
  };
};
