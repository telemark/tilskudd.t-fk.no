'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.showFrontpage,
      description: 'Show frontpage'
    }
  },
  {
    method: 'GET',
    path: '/kontakt',
    config: {
      handler: handlers.showKontaktpage,
      description: 'Show kontaktpage'
    }
  },
  {
    method: 'GET',
    path: '/personvern',
    config: {
      handler: handlers.showPersonvernpage,
      description: 'Show personvernpage'
    }
  },
  {
    method: 'GET',
    path: '/veileder',
    config: {
      handler: handlers.showVeilederpage,
      description: 'Show veilederpage'
    }
  },
  {
    method: 'GET',
    path: '/logout',
    config: {
      handler: handlers.doLogout,
      description: 'Logout'
    }
  }
]
