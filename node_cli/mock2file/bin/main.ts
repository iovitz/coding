import {Command} from 'commander'
import prepare from './prepare'
import initCommands from './init'
import log from './utils/log'

try {
  // Something to do in the preparation stage.
  prepare()
  const program = new Command()
  initCommands(program)
} catch ({message}) {
  log.error('', message as string)
}
