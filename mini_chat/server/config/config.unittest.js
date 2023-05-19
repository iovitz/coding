
module.exports = () => {
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    host: 'mysql.sqlpub.com',
    port: 3306,
    database: 'store_any',
    username: 'store_any',
    password: '8318886ca627749d',
    define: {
      freezeTableName: true,
      timestamps: false,
      logging: false,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  };


  return {
    ...config,
  };
};
