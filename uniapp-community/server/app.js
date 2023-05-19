// app.js or agent.js
module.exports = class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // console.log('配置项即将加载');
  }

  configDidLoad() {
    // console.log('配置项加载完成');
  }

  async didLoad() {
    // console.log('文件加载完成');
  }

  async willReady() {
    // console.log('插件加载完成');
  }

  async didReady() {
    // console.log('全部加载完成');
  }

  async serverDidReady() {
    // console.log('跑起来了');
  }

  async beforeClose() {
    // console.log('结束了');
  }
};
