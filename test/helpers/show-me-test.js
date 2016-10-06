'use strict'

const tap = require('tap')
const showMe = require('../../views/helpers/show-me')

tap.equal(showMe(), 'hide-me', 'If undefined hide-me')

tap.equal(showMe(''), 'hide-me', 'If empty hide-me')

tap.equal(showMe('yay'), 'show-me', 'If length show-me')
