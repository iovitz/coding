'use strict';

const Controller = require('egg').Controller;
const Project = require('../models/Project');
class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    // Project.find().then(project => {
    //   console.log(project);
    //   if (!project) {
    //     console.log(project);
    //   }
    // });
    const newProject = new Project({
      name: 'aefae',
      age: Math.floor(Math.random() * 20) + 10,
    });
    newProject.save().then(res => {
      console.log(res);
    });
    ctx.body = 'hi, template';
  }
}

module.exports = ProjectController;
