import semver from 'semver'
import colors from 'colors'
import checkRoot from './utils/root'
import request from './utils/request'
import axios from 'axios'
import urlJoin from 'url-join'
import pkg from '../package.json'
import log from './utils/log'

const LOWEST_NODE_VERSION = '12.0.0'

// Check node version.
function checkNodeVersion () {
  const currentVersion = process.version
  if (!semver.gte(currentVersion, LOWEST_NODE_VERSION)) {
    throw new Error(
        colors.red(`Nodejs version must be greater then ${colors.yellow.underline('v' + LOWEST_NODE_VERSION)}.`),
    )
  }
}

// // Check npm package update.
// function checkNpmPackageUpdate() {
//   const currentVersion = pkg.version
//   const packageName = pkg.name
//   // const packageUrl = urlJoin('https://registry.npmjs.org/', packageName)
//   const packageUrl = 'https://registry.npmjs.org/ehah'
//   axios.get(packageUrl).then(res => {
//     // console.log(res)
//   })
// }

export default function prepare () {
  log.info('start', `v${pkg.version}`)
  checkRoot()
  checkNodeVersion()
  // checkNpmPackageUpdate()
}
