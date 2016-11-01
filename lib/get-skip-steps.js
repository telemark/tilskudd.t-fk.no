'use strict'

module.exports = (store) => {
  const completedSteps = Object.keys(store)
  var skips = []

  if (completedSteps.indexOf('collaboration') > -1) {
    // What to skip if collaboration
    if (store.collaboration.samarbeid === 'nei') {
      skips.push('partners')
      skips.push('samarbeidsparter')
    }
  }

  if (completedSteps.indexOf('formal') > -1) {
    // What to skip if formal
    if (/folkehelse/.test(store.formal.formal)) {
      skips.push('artform')
      skips.push('kategorier')
      skips.push('kategorieridrett')
    }

    if (/kultur/.test(store.formal.formal)) {
      skips.push('kategorierfolkehelse')
    }
  }

  return skips
}
