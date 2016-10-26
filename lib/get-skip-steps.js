'use strict'

module.exports = (store) => {
  const completedSteps = Object.keys(store)
  var skips = []

  if (completedSteps.indexOf('collaboration') > -1) {
    // What to skip if collaboration
    if (store.collaboration.samarbeid === 'nei') {
      skips.push('partners')
    }
  }

  if (completedSteps.indexOf('type') > -1) {
    // What to skip if type
    if (store.type.tiltak === 'Folkehelse') {
      skips.push('artform')
      skips.push('kategorier')
    }
  }

  return skips
}
