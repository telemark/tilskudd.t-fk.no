'use strict'

const envs = process.env

module.exports = (request) => {
  const yar = request.yar
  const store = yar._store
  const storeKeys = Object.keys(store)
  var document = {
    skjemaUtfyllingStop: new Date().getTime(),
    CALLBACK_STATUS_URL: envs.CALLBACK_STATUS_URL,
    userAgent: request.headers['user-agent']
  }

  storeKeys.forEach((key) => {
    document[key] = store[key]
  })

  return document
}
