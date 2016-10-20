'use strict'

const config = require('../config')
const pkg = require('../package.json')
const getNextForm = require('../lib/get-next-form')
const getSkipSteps = require('../lib/get-skip-steps')

module.exports.getNextStep = (request, reply) => {
  const payload = request.payload
  const yar = request.yar

  if (payload) {
    var completedSteps = yar.get('completedSteps') || []
    completedSteps.push(payload.stepName)
    yar.set(payload.stepName, payload)
    yar.set('completedSteps', completedSteps)
    const skipSteps = getSkipSteps(yar._store)
    skipSteps.forEach(function (item) {
      yar.set(item, false)
    })
  }

  const nextForm = getNextForm(yar._store)

  reply.redirect('/' + nextForm)
}

module.exports.getPreviousStep = (request, reply) => {
  const yar = request.yar
  var completedSteps = yar.get('completedSteps')
  if (completedSteps) {
    const previousStep = completedSteps.pop()
    yar.set('completedSteps', completedSteps)

    if (previousStep === 'skole') {
      yar.clear('velgskole')
      yar.clear('velgklasse')
      yar.clear('skoleadresse')
    }

    if (previousStep === 'grunnlag') {
      yar.clear('grunnlag')
    }

    if (previousStep === 'bosted') {
      yar.clear('bosted')
      yar.clear('bosteddelt')
      yar.clear('bostedhybel')
    }

    if (previousStep === 'busskort') {
      yar.clear('busskort')
      yar.clear('busskortnummer')
    }

    reply.redirect('/' + previousStep)
  } else {
    reply.redirect('/')
  }
}

module.exports.getPartOrganisasjon = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('organisasjon', viewOptions)
}

module.exports.getPartKontaktperson = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('kontaktperson', viewOptions)
}

module.exports.getPartGoal = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('goal', viewOptions)
}

module.exports.getPartTarget = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('target', viewOptions)
}

module.exports.getPartCollaboration = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('collaboration', viewOptions)
}

module.exports.getPartPartners = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('partners', viewOptions)
}

module.exports.getPartTiltak = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('tiltak', viewOptions)
}

module.exports.getPartSeover = (request, reply) => {
  const yar = request.yar
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL,
    document: yar._store
  }

  reply.view('seover', viewOptions)
}

module.exports.getPartFinanser = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('finanser', viewOptions)
}

module.exports.getPartKvittering = (request, reply) => {
  const yar = request.yar
  const document = JSON.parse(JSON.stringify(yar._store))
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL,
    document: document
  }

  yar.reset()

  reply.view('kvittering', viewOptions)
}

module.exports.doCleanup = (request, reply) => {
  const yar = request.yar

  yar.reset()

  reply.redirect('/')
}

module.exports.doSubmit = (request, reply) => {
  const yar = request.yar
  const document = yar._store
  request.seneca.act({role: 'queue', cmd: 'add', data: document})
  reply.redirect('/kvittering')
}
