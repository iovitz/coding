import {Command} from 'commander'
import colors from 'colors'
import PKG from '../package.json'
import {init, parse} from './commands'
import log from './utils/log'

// Init commands.
function initCommands (program: Command) {
  program.name(Object.keys(PKG.bin)[0]).usage('<command> [optoins]').version(PKG.version)

  program.command('init [fileName]').alias('i').option('-t, --type <type>', 'Choose template for init.').action(init)

  program
      .command('parse [fileName]')
      .alias('p')
      .option('-t, --type <type>', 'The file you want to mock it.')
      .action(parse)

  /**
   * 兜底选择
   */
  program.on('command:*', (params) => {
    const availableCommands = program.commands.map((cmd) => cmd.name())
    log.error('commands', `Unknow command: ${colors.red(params[0])}`)
    if (availableCommands.length > 0) {
      log.info('commands', `Available commands: ${colors.green(`${availableCommands.join(', ')}`)}`)
    }
  })

  // Parse node params.
  program.parse(process.argv)

  if (process.argv.length < 3) {
    program.outputHelp()
  }

  if (program.args && program.args.length < 1) {
    program.outputHelp()
  }
}

export default initCommands
