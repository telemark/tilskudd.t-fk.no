'use strict'

const config = require('../config')
const pkg = require('../package.json')
const getCategories = require('../lib/get-categories')
const getNextForm = require('../lib/get-next-form')
const getSkipSteps = require('../lib/get-skip-steps')
const prepareSoknad = require('../lib/prepare-data-for-submit')

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
    reply.redirect('/' + previousStep)
  } else {
    reply.redirect('/')
  }
}

module.exports.getPartOrganisasjon = (request, reply) => {
  const yar = request.yar
  const data = yar.get('organisasjon') || {}
  const viewOptions = {
    data: data,
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
  const yar = request.yar
  const data = yar.get('kontaktperson') || {}
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('kontaktperson', viewOptions)
}

module.exports.getPartFormal = (request, reply) => {
  const yar = request.yar
  const data = yar.get('formal') || {}
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('formal', viewOptions)
}

module.exports.getPartTarget = (request, reply) => {
  const yar = request.yar
  const data = yar.get('target') || {}
  const viewOptions = {
    data: data,
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
  const yar = request.yar
  const data = yar.get('collaboration') || {}
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('collaboration', viewOptions)
}

module.exports.getPartSamarbeidsparter = (request, reply) => {
  const yar = request.yar
  const data = yar.get('samarbeidsparter') || {}
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('samarbeidsparter', viewOptions)
}

module.exports.getPartArtform = (request, reply) => {
  const yar = request.yar
  const data = yar.get('artform') || {}
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL
  }

  reply.view('artform', viewOptions)
}

module.exports.getPartKategorier = (request, reply) => {
  const yar = request.yar
  const artform = yar.get('artform')
  const formal = yar.get('formal')
  const isFolkehelse = /folkehelse/.test(formal.formal)
  const categoryType = isFolkehelse ? 'Folkehelse' : artform.artform
  const data = yar.get('kategorier') || {}
  const categories = getCategories(categoryType)
  const viewOptions = {
    data: data,
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL,
    categories: categories
  }

  reply.view('kategorier', viewOptions)
}

module.exports.getPartPartners = (request, reply) => {
  const yar = request.yar
  const data = yar.get('partners') || {}
  const viewOptions = {
    data: data,
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
  const yar = request.yar
  const data = yar.get('tiltak') || {}
  const viewOptions = {
    data: data,
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
  const document = prepareSoknad(request)
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    logoutUrl: config.AUTH_LOGOUT_URL,
    document: document
  }

  reply.view('seover', viewOptions)
}

module.exports.getPartFinanser = (request, reply) => {
  const yar = request.yar
  const data = yar.get('finanser') || {}
  const viewOptions = {
    data: data,
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
  const document = prepareSoknad(request)
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
  const document = prepareSoknad(request)
  request.seneca.act({role: 'queue', cmd: 'add', data: document})
  reply.redirect('/kvittering')
}
