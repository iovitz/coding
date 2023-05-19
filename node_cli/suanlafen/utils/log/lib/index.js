'use strict'
const log = require('npmlog')

// 修改 log 的 level
log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info '
// 修改前缀
log.heading = 'suanlafen'

// 修改前缀样式
log.headingStyle = {
  fg: 'white',
  bg: 'magenta',
  bold: true,
}

// 添加 log 类型
log.addLevel('success', 2000, { fg: 'green', bold: true })
log.addLevel('debug', 1000, { fg: 'purple' })

module.exports = log
