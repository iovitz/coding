
module.exports = () => {
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    host: 'mysql.sqlpub.com',
    port: 3306,
    database: 'uniapp_community',
    username: 'uniapp_community',
    password: 'fc6cc23b19aa0378',
    define: {
      freezeTableName: true,
      timestamps: false,
      logging: false,
    },
  };


  return {
    ...config,
  };
};
