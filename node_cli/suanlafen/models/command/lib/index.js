'use strict'
const semver = require('semver')
const colors = require('colors')
const log = require('@suanlafen/log')

const LOWEST_NODE_VERSION = '12.0.0'

class Command {
  constructor (argv) {
    if (!argv.length) {
      throw new Error('Command构造参数不能为空')
    }
    if (!Array.isArray(argv) && argv.length) {
      throw new Error('Command构造参数必须是数组且不能为空')
    }
    this._argv = argv
    const runner = new Promise((resolve, reject) => {
      let chain = Promise.resolve()
      chain = chain.then(() => this.checkNodeVersion())
      chain = chain.then(() => this.initArgs())
      chain = chain.then(() => this.init())
      chain = chain.then(() => this.exec())
      chain.catch((e) => {
        log.error(e.message)
        if (process.env.LOG_LEVEL === 'verbose') {
          console.log(e)
        }
      })
    })
  }

  initArgs () {
    // this._cmd = this._argv[this._argv.length - 1]
    // this._args = this._argv.slice(0, this._argv.length - 1)
  }

  checkNodeVersion () {
    // 获取当前版本号
    const currentVersion = process.version
    const lowestVersion = LOWEST_NODE_VERSION

    // 比对最低版本号
    if (!semver.gt(currentVersion, lowestVersion)) {
      throw new Error(colors.red(`suanlafen 需要安装 v${lowestVersion} 以上版本的NodeJS`))
    }
  }
  init () {
    throw new Error('init 方法必须实现')
  }

  exec () {
    throw new Error('exec 方法必须实现')
  }
}

module.exports = Command
