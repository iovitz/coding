import log from '../utils/log'
import {writeFile} from 'fs'
import colors from 'colors'

const toJson = (data: any, fileName: string) => {
  // Create file and write content.
  writeFile(`./${fileName}`, JSON.stringify(data, null, 2), {flag: 'w'}, (err) => {
    if (err) {
      log.error('parse', 'Conversion failed because:')
      log.error('parse', err.message)
    } else {
      log.success('parse', colors.green('Conversion succeeded!'))
      log.success(
          'parse',
          `The converted file named "${colors.green.underline(fileName)}" has been created successfully`,
      )
    }
  })
  return data
}

export default toJson
