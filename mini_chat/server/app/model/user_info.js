'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const UserInfo = app.model.define('mini_chat_user_info', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    uid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '用户ID',
    },
    birthday: {
      type: DATE,
      allowNull: true,
      comment: '生日',
    },
    job: {
      type: STRING(30),
      allowNull: true,
      comment: '工作',
    },
    home: {
      type: STRING(50),
      allowNull: true,
      comment: '家庭住址',
    },
  });

  return UserInfo;
};
