'use strict'

const handler = require('../handlers/test')

module.exports = [
  {
    method: 'GET',
    path: '/test/ping',
    config: {
      handler: handler.testPing,
      description: 'Show ping'
    }
  }
]
