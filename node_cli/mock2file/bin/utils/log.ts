import log from 'npmlog'

// Default log level.
log.level = 'info '

// Change the prefix.
log.heading = ' mock2file '

// Change the prefix style.
log.headingStyle = {
  bold: true,
  bg: 'yellow',
  fg: 'black',
}

// Add success log style.
log.addLevel('success', 2000, {fg: 'green', bold: true})

export default log
