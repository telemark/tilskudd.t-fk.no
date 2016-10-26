'use strict'

module.exports = function senecaHub (options) {
  const seneca = this

  seneca.add('role: info, info: queue', (args, callback) => {
    console.log('Action in the queue')
    callback(null, {success: true})
  })

  return options.tag || 'seneca-hub'
}
