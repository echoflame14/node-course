const EventEmitter = require('events')

var url = 'http://mylogger.io/'

class Logger extends EventEmitter {
  log (message) {
    // send http request:
    var requestString = url + message
    console.log(requestString)

    // Raise an event:
    this.emit('request sent', requestString)
  }
}

module.exports = Logger
