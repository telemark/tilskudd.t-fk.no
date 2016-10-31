'use strict'

const tap = require('tap')
const routes = require('../../routes/soknad')

tap.equal(routes.length, 19, 'There are 19 soknad routes')
