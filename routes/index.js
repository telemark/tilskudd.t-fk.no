'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.showFrontpage,
    config: {
      security: true,
      description: 'Show frontpage'
    }
  },
  {
    method: 'GET',
    path: '/kontakt',
    handler: handlers.showKontaktpage,
    config: {
      security: true,
      description: 'Show kontaktpage'
    }
  },
  {
    method: 'GET',
    path: '/personvern',
    handler: handlers.showPersonvernpage,
    config: {
      security: true,
      description: 'Show personvernpage'
    }
  },
  {
    method: 'GET',
    path: '/veileder',
    handler: handlers.showVeilederpage,
    config: {
      security: true,
      description: 'Show veilederpage'
    }
  },
  {
    method: 'GET',
    path: '/logout',
    handler: handlers.doLogout,
    config: {
      security: true,
      description: 'Logout'
    }
  }
]
