'use strict'
const sp = require('child_process')

/**
 * 判断一个数据是否为对象类型
 * @param {any} o 需要判断的数据
 * @returns boolean
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

/**
 * 命令行加载动效
 * @param {string} text 提示文本
 * @param {string} dpinnrtString 加载字符
 * @returns
 */
function spinnerRunner(text = 'loading... %s', dpinnrtString = '|/-\\') {
  const Spinner = require('cli-spinner').Spinner
  const spinner = new Spinner(text)
  spinner.setSpinnerString(dpinnrtString)
  spinner.start()
  return spinner
}

/**
 * 阻塞js执行线程
 * @param {number} time 暂停时间
 */
async function sleep(time) {
  await new Promise(resolve => setTimeout(resolve, time))
}
/**
 * 解决window和mac的差异
 */
function spawn(command, args, options) {
  const win32 = process.platform === 'win32'

  const cmd = win32 ? 'cmd' : command

  const cmdArgs = win32 ? ['/c'].concat(command, args) : args

  return sp.spawn(cmd, cmdArgs, options || {})
}

/**
 * 同步执行
 */
function spawnAsync(...args) {
  return new Promise((resolve, reject) => {

    const child = spawn(...args)

    child.on('error', (err) => reject(err))
    child.on('exit', (res) => resolve(res))
  })
}
module.exports = {
  isObject,
  spinnerRunner,
  sleep,
  spawn,
  spawnAsync,
}
