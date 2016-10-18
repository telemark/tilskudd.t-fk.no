'use strict'

const handler = require('../handlers/soknad')

module.exports = [
  {
    method: 'POST',
    path: '/next',
    handler: handler.getNextStep,
    config: {
      auth: false,
      security: true,
      description: 'Show next step'
    }
  },
  {
    method: 'GET',
    path: '/next',
    handler: handler.getNextStep,
    config: {
      auth: false,
      security: true,
      description: 'Show next step'
    }
  },
  {
    method: 'GET',
    path: '/previous',
    handler: handler.getPreviousStep,
    config: {
      auth: false,
      security: true,
      description: 'Show previous step'
    }
  },
  {
    method: 'GET',
    path: '/organisasjon',
    handler: handler.getPartOrganisasjon,
    config: {
      auth: false,
      security: true,
      description: 'Show part for organization'
    }
  },
  {
    method: 'GET',
    path: '/kontaktperson',
    handler: handler.getPartKontaktperson,
    config: {
      auth: false,
      security: true,
      description: 'Show part for contactperson'
    }
  }
]
