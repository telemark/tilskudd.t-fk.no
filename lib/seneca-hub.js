'use strict'

module.exports = function senecaHub (options) {
  const seneca = this

  seneca.add('role: info, info: queue', (args, callback) => {
    console.log(args)
  })

  return options.tag || 'seneca-hub'
}
