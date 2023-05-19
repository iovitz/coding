'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize;

  const User = app.model.define('mini_chat_user', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    nickname: {
      type: STRING(40),
      allowNull: false,
      comment: '用户名',
      unique: true,
    },
    username: {
      type: STRING(20),
      allowNull: false,
      comment: '用户名',
      unique: true,
    },
    password: {
      type: STRING(70),
      allowNull: false,
      comment: '密码',
    },
    description: {
      type: STRING(200),
      allowNull: true,
      comment: '个人说明',
    },
    avatar: {
      type: STRING(200),
      allowNull: true,
      comment: '头像url',
    },
    gender: {
      type: BOOLEAN,
      allowNull: true,
      comment: '性别',
    },
    phone: {
      type: STRING(20),
      allowNull: true,
      comment: '手机',
    },
    email: {
      type: STRING(20),
      allowNull: true,
      comment: '邮箱',
    },
    status: {
      type: BOOLEAN,
      allowNull: true,
      comment: '禁用状态',
    },
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
