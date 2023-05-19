'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserInfo = app.model.define('user_info', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    uid: INTEGER.UNSIGNED,
    age: INTEGER.UNSIGNED,
    sex: INTEGER.UNSIGNED,
    emotion: INTEGER.UNSIGNED,
    job: STRING(10),
    home: STRING(255),
    birthday: DATE,
  });

  return UserInfo;
};
