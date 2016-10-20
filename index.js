'use strict'

const routes = require('./routes')
const testRoutes = require('./routes/test')
const soknadRoutes = require('./routes/soknad')
const queueRoutes = require('./routes/queue')

exports.register = (server, options, next) => {
  server.route(routes)
  server.route(testRoutes)
  server.route(soknadRoutes)
  server.route(queueRoutes)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
