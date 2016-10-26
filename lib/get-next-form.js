'use strict'

const steps = [
  'seover',
  'tiltak',
  'finanser',
  'partners',
  'collaboration',
  'kategorier',
  'artform',
  'type',
  'target',
  'goal',
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
