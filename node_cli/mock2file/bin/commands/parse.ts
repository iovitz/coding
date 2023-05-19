import {readFileSync} from 'fs'
import path from 'path'
import mockjs from 'mockjs'
import {cwd} from 'process'
import {FileType} from '../types'
import toJson from '../parser/json'
import toExcel from '../parser/excel'

const {mock} = mockjs

const types: FileType[] = ['json', 'excel']

interface ParseParams {
  force?: boolean
  type?: FileType
}

const parse = (fileName: string, params: ParseParams) => {
  // Get mock file.
  const fileNameRead = path.join(cwd(), fileName)

  let {force, type} = params

  if (!types.includes(type!)) {
    type = 'json'
  }

  console.log(type)

  // transfor
  let buffer = ''
  buffer = readFileSync(fileNameRead, 'utf-8')
  const result = mock(JSON.parse(String(buffer)))
  if (type === 'json') {
    const newFileName = fileName.substring(0, fileName.lastIndexOf('.')) + '-parsed.json'
    toJson(result, newFileName)
  } else if (type === 'excel') {
    const newFileName = fileName.substring(0, fileName.lastIndexOf('.')) + '-parsed'
    toExcel(result, newFileName, fileNameRead)
  }
}

export default parse
