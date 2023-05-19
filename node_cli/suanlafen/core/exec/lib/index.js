'use strict'

const path = require('path')
const log = require('@suanlafen/log')
const Package = require('@suanlafen/package')
const {spawn} = require('@suanlafen/utils')

const SETTINGS = {
  init: '@suanlafen/init',
}

const CACHE_DIR = 'dependencies'

async function exec (name, opts, cmdObj) {
  const cmdName = cmdObj.name()

  const packageName = SETTINGS[cmdName]

  // version
  const packageVersion = 'latest'

  // 拿到路径
  let targetPath = process.env.CLI_TARGET_PATH
  let storeDir = ''
  let pkg = null
  const homePath = process.env.CLI_HOME_PATH

  // debug提示
  log.verbose('homePath: ', homePath)
  log.verbose('targetPath: ', targetPath)

  // 没有targetPath就生成
  if (!targetPath) {
    targetPath = path.resolve(homePath, CACHE_DIR)
    storeDir = path.resolve(targetPath, 'node_modules')
    log.verbose('targetPath fixed: ', targetPath)
    log.verbose('storeDir: ', storeDir)
    // 创建 Package 对象
    pkg = new Package({
      packageName,
      storeDir,
      packageVersion,
      targetPath,
    })

    if (await pkg.exists()) {
      // 更新Package
      log.verbose(`更新：${packageName}`)
      await pkg.update()
    } else {
      // 安装Package
      log.verbose(`安装：${packageName}`)
      await pkg.install()
    }
  } else {
    pkg = new Package({
      packageName,
      packageVersion,
      targetPath,
    })
  }

  let rootFile = pkg.getRootFilePath()
  if (rootFile) {
    try {
      // 单线程
      // require(rootFile)(arguments)

      const params = JSON.stringify({
        name,
        opts,
      })

      if (process.platform === 'win32') {
        rootFile = rootFile.replace(/\\/g, '\\\\')
      }

      // 使用子进程
      const code = `require('${rootFile}')(${params})`

      log.verbose(`执行：${packageName}`)
      const child = spawn('node', ['-e', code], {
        cow: process.cwd(), // 执行路径
        stdio: 'inherit', // 输出结果显示在父进程中
      })

      child.on('error', (e) => {
        log.error(e.message)
        process.exit(1)
      })

      child.on('exit', (e) => {
        log.verbose('命令执行成功:', e)
        process.exit(e)
      })
    } catch (e) {
      log.error(e.message)
      if (process.env.LOG_LEVEL === 'verbose') {
        console.log(e)
      }
    }
  }
}

module.exports = exec
