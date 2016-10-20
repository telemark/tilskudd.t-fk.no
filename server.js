'use strict'

const Hapi = require('hapi')
const Chairo = require('chairo')
const Blankie = require('blankie')
const Scooter = require('scooter')
const Yar = require('yar')
const hapiAuthCookie = require('hapi-auth-cookie')
const hapiAuthJwt2 = require('hapi-auth-jwt2')
const Seneca = require('seneca')()
const vision = require('vision')
const inert = require('inert')
const senecaQueue = require('tfk-seneca-queue-mongodb')
const server = new Hapi.Server()
const config = require('./config')
const tilskuddService = require('./index')
const validateSession = require('./lib/validate-session')
const validateApi = require('./lib/validate-api')
const senecaPing = require('./lib/seneca-ping')
const senecaHub = require('./lib/seneca-hub')

const blankieOptions = {
  styleSrc: ['https://fonts.googleapis.com', 'https://code.getmdl.io', 'self'],
  fontSrc: 'https://fonts.gstatic.com self',
  scriptSrc: ['self', 'https://code.getmdl.io', 'https://piwik.service.t-fk.no'],
  imgSrc: ['self', 'data:', 'https://piwik.service.t-fk.no'],
  generateNonces: false
}

const yarOptions = {
  storeBlank: false,
  cookieOptions: {
    password: config.YAR_SECRET,
    isSecure: process.env.NODE_ENV !== 'development',
    isSameSite: 'Lax'
  }
}

server.connection({
  port: config.SERVER_PORT
})

const plugins = [
  {register: Scooter},
  {register: Blankie, options: blankieOptions},
  {register: Yar, options: yarOptions},
  {register: Chairo, options: {seneca: Seneca}},
  {register: vision},
  {register: inert},
  {register: hapiAuthCookie},
  {register: hapiAuthJwt2}
]

server.register(plugins, error => {
  if (error) {
    console.error('Failed to load a plugin:', error)
  }

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views',
    helpersPath: 'views/helpers',
    partialsPath: 'views/partials',
    layoutPath: 'views/layouts',
    layout: true,
    compileMode: 'sync'
  })

  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    },
    config: {
      auth: false
    }
  })

  server.auth.strategy('session', 'cookie', {
    password: config.COOKIE_SECRET,
    cookie: 'tilskudd-session',
    validateFunc: validateSession,
    redirectTo: config.AUTH_LOGIN_URL,
    isSecure: process.env.NODE_ENV !== 'development',
    isSameSite: 'Lax'
  })

  server.auth.default('session')

  server.auth.strategy('jwt', 'jwt', {
    key: config.JWT_SECRET,          // Never Share your secret key
    validateFunc: validateApi,            // validate function defined above
    verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
  })

  registerRoutes()

  server.seneca.use(senecaPing)
  server.seneca.use(senecaHub)
  server.seneca.use(senecaQueue, {MONGODB_URI: config.QUEUE_SERVER})
})

function registerRoutes () {
  server.register([
    {
      register: tilskuddService,
      options: {}
    }
  ], function (err) {
    if (err) {
      console.error('Failed to load a plugin:', err)
    }
  })
}

module.exports.start = () => {
  server.start(() => {
    console.log('Server running at:', server.info.uri)
  })
}

module.exports.stop = () => {
  server.stop(() => {
    console.log('Server stopped')
  })
}
