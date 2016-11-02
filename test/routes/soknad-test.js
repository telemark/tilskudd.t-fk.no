'use strict'

const tap = require('tap')
const routes = require('../../routes/soknad')

tap.equal(routes.length, 18, 'There are 18 soknad routes')
