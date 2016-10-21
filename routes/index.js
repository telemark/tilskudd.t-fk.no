'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.showFrontpage,
    config: {
      auth: false,
      security: true,
      description: 'Show frontpage'
    }
  },
  {
    method: 'GET',
    path: '/kontakt',
    handler: handlers.showKontaktpage,
    config: {
      auth: false,
      security: true,
      description: 'Show kontaktpage'
    }
  },
  {
    method: 'GET',
    path: '/personvern',
    handler: handlers.showPersonvernpage,
    config: {
      auth: false,
      security: true,
      description: 'Show personvernpage'
    }
  },
  {
    method: 'GET',
    path: '/veileder',
    handler: handlers.showVeilederpage,
    config: {
      auth: false,
      security: true,
      description: 'Show veilederpage'
    }
  },
  {
    method: 'GET',
    path: '/tilskudd',
    handler: handlers.showTilskuddpage,
    config: {
      auth: false,
      security: true,
      description: 'Show tilskuddpage'
    }
  },
  {
    method: 'GET',
    path: '/logout',
    handler: handlers.doLogout,
    config: {
      auth: false,
      security: true,
      description: 'Logout'
    }
  }
]
