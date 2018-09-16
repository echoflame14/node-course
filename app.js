const Logger = require('./logger')
const logger = new Logger()
logger.on('request sent', args => {
  console.log('This message was just sent: ' + args)
})
logger.log('hey')
