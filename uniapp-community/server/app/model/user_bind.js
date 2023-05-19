'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const UserBind = app.model.define('user_bind', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    uid: INTEGER.UNSIGNED,
    type: STRING(50),
    openid: STRING(255),
    nickname: STRING(50),
    avatar: STRING(255),
  });

  return UserBind;
};
