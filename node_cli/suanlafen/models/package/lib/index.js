'use strict'

const path = require('path')
const npminstall = require('npminstall')
const pkgDir = require('pkg-dir').sync
const fsExtra = require('fs-extra')
const pathExits = require('path-exists').sync
const {isObject} = require('@suanlafen/utils')
const formatPath = require('@suanlafen/format-path')
const {getDefaultRegistry, getNpmLatestVersion} = require('@suanlafen/get-npm-info')

class Package {
  constructor (options) {
    if (!options) {
      throw new Error('Package类的options参数不能为空')
    }
    if (!isObject(options)) {
      throw new Error('Package类的options参数必须是对象')
    }
    // package的路径
    this.targetPath = options.targetPath
    // 缓存package的路径
    this.storeDir = options.storeDir
    // package 名称
    this.packageName = options.packageName
    // package value
    this.packageVersion = options.packageVersion || '1.0.0'
    // 缓存路径前缀
    this.cacheFilePathPrefix = this.packageName.replace('/', '_')
  }

  async prepare () {
    if (this.storeDir && !pathExits(this.storeDir)) {
      fsExtra.mkdirpSync(this.storeDir)
    }

    if (this.packageVersion === 'latest') {
      const v = await getNpmLatestVersion(this.packageName)
      this.packageVersion = v
    }
  }

  // 判断 package 是否存在
  async exists () {
    // 是否缓存模式
    if (this.storeDir) {
      await this.prepare()
      return pathExits((this.cacheFilePath))
    } else {
      return pathExits(this.targetPath)
    }
  }

  // 安装 package
  async install () {
    await this.prepare()

    return npminstall({
      root: this.targetPath,
      storeDir: this.storeDir,
      registry: getDefaultRegistry(),
      pkgs: [{
        name: this.packageName,
        version: this.packageVersion,
      }],
    })
  }

  // 更新 package
  async update () {
    await this.prepare()
    // 1 拿到最新版本号
    const latestVersion = await getNpmLatestVersion(this.packageName)
    this.packageVersion = latestVersion
    // 1 拿到最新版本号对应的缓存路径
    const latestVersionCachePath = this.getSpecificCacheFilePath(latestVersion)
    // 2 路径存在？
    if (!pathExits(latestVersionCachePath)) {
      await npminstall({
        root: this.targetPath,
        storeDir: this.storeDir,
        registry: getDefaultRegistry(),
        pkgs: [{
          name: this.packageName,
          version: latestVersion,
        }],
      })
    }

    return latestVersion
  }

  // 拿到缓存路径
  get cacheFilePath () {
    return this.getSpecificCacheFilePath(this.packageVersion)
  }

  getSpecificCacheFilePath (version) {
    return path.resolve(
        this.storeDir,
        `_${this.cacheFilePathPrefix}@${version}@${this.packageName}`,
    )
  }

  // 获取入口文件路径
  getRootFilePath () {
    function _getRootFile (targetPath) {
      // 1. 使用 pkg-dir 找到 package.json 所在目录
      const dir = pkgDir(targetPath)
      // 2. 读取 package.json (require)
      if (dir) {
        // 3. 寻找 package.json 中的main/lib
        const pkgFile = require(path.resolve(dir, 'package.json'))
        // if (pkgFile && (pkgFile.main || pkgFile.lib)) {
        if (pkgFile && pkgFile.main) {
          // 4. 路径兼容 MacOS / windows
          return formatPath(path.resolve(dir, pkgFile.main))
        }
      }
      return null
    }

    if (this.storeDir) {
      return _getRootFile(this.cacheFilePath)
    } else {
      return _getRootFile(this.targetPath)
    }
  }
}
module.exports = Package
