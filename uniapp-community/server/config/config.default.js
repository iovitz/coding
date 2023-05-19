
module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1680272953120_6265';

  config.middleware = [ 'errorHandler' ];

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


  return {
    ...config,
  };
};
