'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 1, 'There are 1 standard handler')

tap.ok(handlers.showFrontpage, 'Handler has method showFrontpage')
