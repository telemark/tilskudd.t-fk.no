'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 5, 'There are 5 standard handlers')

tap.ok(handlers.showFrontpage, 'Handler has method showFrontpage')

tap.ok(handlers.showKontaktpage, 'Handler has method showKontaktpage')

tap.ok(handlers.showPersonvernpage, 'Handler has method showPersonvernpage')

tap.ok(handlers.showVeilederpage, 'Handler has method showVeilederpage')

tap.ok(handlers.doLogout, 'Handler has method doLogout')
