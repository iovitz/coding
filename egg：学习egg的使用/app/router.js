'use strict';

const mongoose = require('mongoose');
const { mongoDBUrl } = require('../config/db');

// 链接数据库
mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch(err => {
    console.log('---', err);
  });

module.exports = app => {
  const { router, controller } = app;
  router.get('/project', controller.project.getTemplate);
};
