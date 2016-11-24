'use strict'

const paths = require('../config/paths.json')

module.exports = (store) => {
  const allKeys = Object.keys(store)
  const completed = allKeys.filter((key) => store[key])
  const isCompleted = (item) => completed.indexOf(item.id) > -1
  const crumbs = paths.filter(isCompleted)

  return crumbs.map((item) => { return `<li><a href="/${item.id}">${item.name}</a></li>` })
}
