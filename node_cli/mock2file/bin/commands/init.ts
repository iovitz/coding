import {isFileExists} from '../utils/file'
import {writeFile} from 'fs'
import log from '../utils/log'
import colors from 'colors'
import templates from '../templates'
import {FileType} from '../types'

interface InitParams {
  type?: FileType
  force?: boolean
}

const init = (fileName: string | undefined, params: InitParams) => {
  if (!fileName) {
    fileName = 'mock.json'
  }
  if (!fileName.endsWith('.json')) {
    fileName = fileName + '.json'
  }
  const {type, force} = params

  // The content of the initialization file.
  let fileContent = templates[type!]
  if (!fileContent) {
    fileContent = templates.json
  }

  // Create file and write content.
  writeFile(`./${fileName}`, JSON.stringify(fileContent, null, 2), {flag: 'w'}, (err) => {
    if (err) {
      log.error('init', 'Init file error')
    } else {
      log.success('init', `The mock file "${colors.green.underline(fileName as string)}" has been inited!`)
    }
  })
}

export default init
