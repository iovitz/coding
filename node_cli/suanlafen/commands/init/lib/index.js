'use strict'
const Command = require('@suanlafen/command')
const log = require('@suanlafen/log')
const fs = require('fs')
const fse = require('fs-extra')
const ejs = require('ejs')
const glob = require('glob')
const inquirer = require('inquirer')
const pathExists = require('path-exists').sync
const Package = require('@suanlafen/package')
const {spinnerRunner, sleep, spawnAsync} = require('@suanlafen/utils')
const axios = require('axios')

const TYPE_PROJECT = 'project'
const TYPE_COMPONENT = 'component'

const TEMPLATE_TYPE_NORMAL = 'normal'
const TEMPLATE_TYPE_CUSTOM = 'custom'

const WHITE_COMMAND = ['npm', 'cnpm', 'yarn', 'pnpm']

class InitCommand extends Command {
  init () {
    if (this._argv.length < 2) {
      this.projectName = 'suanlafen-project'
      this.force = !!this._argv[0].force
    } else {
      this.projectName = this._argv[0] || 'suanlafen-project'
      if (this._argv[1]) {
        this.force = !!this._argv[1].force
      }
    }
    log.verbose('projectName', this.projectName)
    log.verbose('force', this.force)
  }

  async exec () {
    try {
      // 1. 准备阶段
      const projectInfo = await this.prepare()
      this.projectInfo = projectInfo
      this.projectPath = path.resolve(process.cwd(), this.projectInfo.projectName)
      if (projectInfo) {
        // 下载模板
        await this.downloadTemplate()
      } else {
        console.log('退出')
      }
    } catch (e) {
      log.error(e.message)
      if (process.env.LOG_LEVEL === 'verbose') {
        console.log(e)
      }
    }
  }

  async downloadTemplate () {
    // 通过项目模板API获取项目信息
    const userHome = process.env.CLI_USER_HOME
    const {projectTemplate} = this.projectInfo
    const targetPath = path.resolve(userHome, '.suanlafen', 'template')
    const storeDir = path.resolve(userHome, '.suanlafen', 'template', 'node_modules')
    this.templateInfo = this.template.find((itm) => itm.npmName === projectTemplate)
    const templateNpm = new Package({
      targetPath,
      storeDir,
      packageName: projectTemplate,
      packageVersion: 'latest',
    })
    // 如果项目不存在就下载项目
    const spinner = spinnerRunner('正在全速下载中...%s')
    await sleep(1000)
    try {
      if (!(await templateNpm.exists())) {
        await templateNpm.install()
        spinner.stop(true)
        log.success('下载模板成功')
      } else {
        // 项目存在更新项目
        await templateNpm.update()
        spinner.stop(true)
        log.success('更新模板成功')
      }
    } catch (e) {
      throw new Error(e)
    } finally {
      console.log('')
    }
    this.templateNpm = templateNpm
    await this.installTemplate()
  }

  async installTemplate () {
    if (this.templateInfo) {
      if (!this.templateInfo.type) {
        this.templateInfo.type = TEMPLATE_TYPE_NORMAL
      }
      if (this.templateInfo.type === TEMPLATE_TYPE_NORMAL) {
        // 标准安装
        await this.installNormalTemplate()
      } else if (this.templateInfo.type === TEMPLATE_TYPE_CUSTOM) {
        // 自定义安装
        await this.installCustomTemplate()
      } else {
        // 其他
        throw new Error('无法识别项目类型')
      }
    } else {
      throw new Error('项目模板信息不存在')
    }
  }

  async installNormalTemplate () {
    const spinner = spinnerRunner('正在安装模板...')
    await sleep(1000)
    try {
      // 拷贝模板到当前目录
      const templatePath = path.resolve(this.templateNpm.cacheFilePath, 'template')
      const targetPath = this.projectPath
      fse.ensureDirSync(templatePath)
      fse.ensureDirSync(targetPath)
      fse.copySync(templatePath, targetPath)
    } catch (error) {
      throw e
    } finally {
      spinner.stop(true)
      log.success('模板安装成功')
      const ignore = ['node_modules/**', 'public/**']
      await this.ejsRender(ignore)

      log.notice('安装', '正在安装依赖')
      // 安装依赖
      const {installCommand, startCommand} = this.templateInfo

      if ((await this.execCommand(installCommand, '依赖安装出现异常！')) !== 0) {
        log.success('依赖安装成功')
      }

      if ((await this.execCommand(startCommand, '项目启动失败！')) !== 0) {
        log.success('项目启动成功')
      }
    }
  }

  async execCommand (command, errMsg) {
    let ret
    if (command) {
      const cmdArr = command.split(' ')
      const cmd = cmdArr[0]
      const args = cmdArr.slice(1)
      ret = await spawnAsync(cmd, args, {
        stdio: 'inherit',
        cwd: this.projectPath,
      })
    }
    if (ret !== 0) {
      throw new Error(errMsg)
    }
    return ret
  }

  async installCustomTemplate () {
    console.log('自定义模板')
  }

  ejsRender (ignore) {
    const {projectPath, projectInfo} = this
    return new Promise((resolve, reject) => {
      glob(
          '**',
          {
            ignore,
            cwd: projectPath,
            nodir: true,
          },
          (err, files) => {
            if (err) {
              reject(err)
            }
            Promise.all(
                files.map((file) => {
                  const filePath = path.join(projectPath, file)
                  return new Promise((resolve1, rejcet1) => {
                    ejs.renderFile(filePath, projectInfo, {}, (err, result) => {
                      if (err) {
                        rejcet1(err)
                      }
                      fse.writeFileSync(filePath, result)
                      resolve1()
                    })
                  })
                }),
            )
                .then(() => {
                  resolve()
                })
                .catch(() => {
                  // eslint-disable-next-line prefer-promise-reject-errors
                  reject()
                })
          },
      )
    })
  }

  checkCommand (cmd) {
    return WHITE_COMMAND.includes(cmd) ? cmd : null
  }

  async prepare () {
    // 不能使用 __dirname，
    const localPath = path.resolve('.', this.projectName)

    let isForce = this.force

    // 判断目录是否存在
    if (pathExists(localPath)) {
      // 判断当前目录是否为空
      if (!this.isCwdEmpty(localPath) && !isForce) {
        if (!this.force) {
          const answer = await inquirer.prompt({
            type: 'confirm',
            name: 'isForce',
            default: false,
            message: `目标文件夹 ${this.projectName} 不为空，继续创建将清空 ${this.projectName} 文件夹`,
          })
          isForce = answer.isForce
        }

        // 2. 强制更新
        if (isForce) {
          fse.emptyDirSync(localPath)
        } else {
          return false
        }
      }
    } else {
      // 创建目录
      fs.mkdir(localPath, (err) => {
        if (err) {
          throw new Error('创建文件失败')
        }
        // log.success('创建文件夹成功')
        console.log('')
        console.log('')
      })
    }
    return await this.getProjectInfo()
  }

  async getProjectInfo () {
    let projectInfo = {}
    const {type} = await inquirer.prompt({
      type: 'list',
      name: 'type',
      message: '请选择初始化类型',
      choices: [
        {
          name: '项目',
          value: TYPE_PROJECT,
        },
        {
          name: '组件库',
          value: TYPE_COMPONENT,
        },
      ],
    })
    log.verbose('type', type)
    if (type === TYPE_PROJECT) {
      // 获取项目信息
      this.template = (await axios.get('http://114.132.217.57:24678/cli/templates')).data.data
      const project = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: '请输入项目名：',
          default: this.projectName,
          // validate() {},
          // filter() {},
        },
        {
          type: 'input',
          name: 'version',
          message: '请输入版本号：',
          default: '1.0.0',
          // validate() {},
          // filter() {},
        },
        {
          type: 'list',
          name: 'projectTemplate',
          message: '请选择项目模板',
          choices: await this.createTemplateChoise(),
        },
      ])
      projectInfo = {
        type,
        ...project,
        version: '1.0.0',
      }
    } else if (type === TYPE_COMPONENT) {
      // 如果是组件
      console.log('组件库模板正在开发中，敬请期待')
      process.exit(0)
    }
    if (projectInfo.projectName) {
      projectInfo.className = require('kebab-case')(projectInfo.projectName).replace(/^-/, '')
    }
    return projectInfo
  }

  async createTemplateChoise () {
    const choices = []
    this.template.forEach((itm) => {
      choices.push({
        name: itm.name,
        value: itm.npmName,
      })
    })
    return choices
  }

  isCwdEmpty (localPath) {
    // 拿到过滤后的文件
    return fs.readdirSync(localPath).length == 0
  }
}

function init (args) {
  return new InitCommand(Object.values(args))
}

module.exports = init
module.exports.InitCommand = InitCommand
