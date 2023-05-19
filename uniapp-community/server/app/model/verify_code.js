'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserBind = app.model.define('verify_code', {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    fingerprint: INTEGER.UNSIGNED,
    code: STRING(32),
    create_at: DATE,
  });

  return UserBind;
};
