'use strict'

const steps = [
  'seover',
  'samarbeidsparter',
  'partners',
  'collaboration',
  'kategorierfolkehelse',
  'kategorieridrett',
  'kategorier',
  'artform',
  'target',
  'finanser',
  'tiltak',
  'formal',
  'kontaktperson',
  'organisasjon'
]

module.exports = (store) => {
  const completedSteps = Object.keys(store)
  var nextForm = 'seover'

  steps.forEach(function (step) {
    if (completedSteps.indexOf(step) === -1) {
      nextForm = step
    }
  })
  return nextForm
}
