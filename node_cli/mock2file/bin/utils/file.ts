import {accessSync} from 'fs'

// Determine whether the file exists
export function isFileExists (fileName: string) {
  try {
    accessSync(fileName)
    return true
  } catch {
    return false
  }
}

export function initFileName () {}
