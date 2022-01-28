'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建 Schema
const projectSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
