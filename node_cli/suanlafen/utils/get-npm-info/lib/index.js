'use strict'
const axios = require('axios')
const urlJoin = require('url-join')
const semver = require('semver')

function getNpmInfo(npmName, registry) {
  // 如果参数丢失，直接返回null
  if (!npmName) {
    return null
  }
  // 设置请求源：npm官方源 和 taobao源
  const registryUrl = registry || getDefaultRegistry()
  // 拼接 url
  const npmInfoUrl = urlJoin(registryUrl, npmName)
  return axios.get(npmInfoUrl).then(res => {
    if (res.status === 200) {
      // 请求成功
      return res.data
    }
    return null
  })
}

async function getNpmVersions(npmName, registry) {
  const data = await getNpmInfo(npmName, registry)
  if (data) {
    return Object.keys(data.versions)
  } else {
    return []
  }
}

function getSatisfiesVersion(versions, baseVersion) {
  versions = versions
    .filter(version => semver.satisfies(version, `^${baseVersion}`))
    .sort((a, b) => {
      // 降序排序
      semver.lt(a, b)
    })
  return versions
}

async function getNpmSemverVersions(npmName, baseVersion, registry = false) {
  const versions = await getNpmVersions(npmName, registry)
  const newVersions = getSatisfiesVersion(versions, baseVersion)
  if (newVersions && newVersions.length > 0) {
    return newVersions[0]
  }
  return versions[0]
}

function getDefaultRegistry(isOriginal = false) {
  return isOriginal ? 'https://registry.npmjs.org/' : 'https://registry.npm.taobao.org'
}

async function getNpmLatestVersion(npmName, registry) {
  const versions = await getNpmVersions(npmName, registry)
  if(!versions.length) {
    return null
  }
  return versions.sort((a, b) => semver.lt(a, b) ? 1 : -1)[0]
}

module.exports = {
  getNpmInfo,
  getNpmVersions,
  getDefaultRegistry,
  getNpmSemverVersions,
  getNpmLatestVersion
}
