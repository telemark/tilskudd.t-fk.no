'use strict'

const paths = require('../config/paths.json')

module.exports = (completed) => {
  const isCompleted = (item) => completed.indexOf(item.id) > -1
  const crumbs = paths.filter(isCompleted)

  return crumbs
}
