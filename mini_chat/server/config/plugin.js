'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  ajv: {
    enable: true,
    package: 'egg-ajv',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
