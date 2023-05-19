'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    username: STRING(32),
    password: STRING(32),
    avatar: STRING(200),
    phone: STRING(15),
    email: STRING(30),
  });

  return User;
};
