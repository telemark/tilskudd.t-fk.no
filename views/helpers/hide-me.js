'use strict'

module.exports = (input) => {
  const data = input || ''
  return data.length > 0 ? 'invisible' : 'show-me'
}
