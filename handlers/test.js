'use strict'

module.exports.testPing = (request, reply) => {
  request.seneca.act('role: test, cmd: ping', (error, msg) => {
    reply(error || msg)
  })
}
