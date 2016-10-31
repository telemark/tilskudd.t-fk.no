'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const encryptor = require('simple-encryptor')(config.ENCRYPTOR_KEY)
const pkg = require('../package.json')
const repackBrreg = require('../lib/repack-brreg')
const repackKontaktinfo = require('../lib/repack-kontaktinfo')

module.exports.showFrontpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('index', viewOptions)
}

module.exports.showKontaktpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('kontakt', viewOptions)
}

module.exports.showPersonvernpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('personvern', viewOptions)
}

module.exports.showVeilederpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('veileder', viewOptions)
}

module.exports.showTilskuddpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('tilskudd', viewOptions)
}

module.exports.showIkkefunnetpage = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('ikkefunnet', viewOptions)
}

module.exports.start = (request, reply) => {
  const yar = request.yar
  const receivedToken = request.query.jwt
  const jwtDecrypted = jwt.verify(receivedToken, config.JWT_SECRET)
  const data = encryptor.decrypt(jwtDecrypted.data)

  const tokenOptions = {
    expiresIn: '1h',
    issuer: 'https://auth.t-fk.no'
  }

  const token = jwt.sign(data, config.JWT_SECRET, tokenOptions)

  yar.reset()
  yar.set('dsfData', data.dsfData)
  yar.set('korData', data.korData)
  yar.set('brregData', data.brregData)
  yar.set('skjemaUtfyllingStart', new Date().getTime())

  const dsfError = data.dsfError
  const korError = data.korError

  if (dsfError || korError) {
    reply.redirect('/ikkefunnet')
  } else {
    request.cookieAuth.set({
      token: token,
      isAuthenticated: true,
      data: data
    })

    yar.set('organisasjon', repackBrreg(data.brregData))
    yar.set('kontaktperson', repackKontaktinfo(data))

    reply.redirect('/')
  }
}

module.exports.doLogout = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  reply.view('index', viewOptions)
}
