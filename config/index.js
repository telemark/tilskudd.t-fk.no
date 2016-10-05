'use strict'

const envs = process.env

module.exports = {
  SERVER_PORT: envs.TILSKUDD_SERVER_PORT || 8000
}
