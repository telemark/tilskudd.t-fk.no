'use strict'

const handler = require('../handlers/test')

module.exports = [
  {
    method: 'GET',
    path: '/test/ping',
    handler: handler.testPing,
    config: {
      auth: false,
      security: true,
      description: 'Show ping'
    }
  }
]
