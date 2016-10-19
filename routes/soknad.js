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
  },
  {
    method: 'GET',
    path: '/goal',
    handler: handler.getPartGoal,
    config: {
      auth: false,
      security: true,
      description: 'Show part for goal'
    }
  },
  {
    method: 'GET',
    path: '/target',
    handler: handler.getPartTarget,
    config: {
      auth: false,
      security: true,
      description: 'Show part for target'
    }
  },
  {
    method: 'GET',
    path: '/collaboration',
    handler: handler.getPartCollaboration,
    config: {
      auth: false,
      security: true,
      description: 'Show part for collaboration'
    }
  },
  {
    method: 'GET',
    path: '/partners',
    handler: handler.getPartPartners,
    config: {
      auth: false,
      security: true,
      description: 'Show part for partners'
    }
  },
  {
    method: 'GET',
    path: '/finanser',
    handler: handler.getPartFinanser,
    config: {
      auth: false,
      security: true,
      description: 'Show part for finanser'
    }
  },
  {
    method: 'GET',
    path: '/tiltak',
    handler: handler.getPartTiltak,
    config: {
      auth: false,
      security: true,
      description: 'Show part for tiltak'
    }
  },
  {
    method: 'GET',
    path: '/seover',
    handler: handler.getPartSeover,
    config: {
      auth: false,
      security: true,
      description: 'Show part for seover'
    }
  },
  {
    method: 'GET',
    path: '/kvittering',
    handler: handler.getPartKvittering,
    config: {
      auth: false,
      security: true,
      description: 'Show part for kvittering'
    }
  },
  {
    method: 'GET',
    path: '/cleanup',
    handler: handler.doCleanup,
    config: {
      auth: false,
      security: true,
      description: 'Cleanup'
    }
  },
  {
    method: 'POST',
    path: '/submit',
    handler: handler.doSubmit,
    config: {
      auth: false,
      security: true,
      description: 'Submit'
    }
  }
]
