'use strict'

const envs = process.env

module.exports = {
  SERVER_PORT: envs.TILSKUDD_SERVER_PORT || 8000,
  ENCRYPTOR_KEY: envs.TILSKUDD_ENCRYPTOR_KEY || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  COOKIE_SECRET: envs.TILSKUDD_COOKIE_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  JWT_SECRET: envs.TILSKUDD_JWT_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  YAR_SECRET: envs.TILSKUDD_YAR_SECRET || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  AUTH_LOGIN_URL: envs.TILSKUDD_AUTH_LOGIN_URL || '/login',
  AUTH_LOGOUT_URL: envs.TILSKUDD_AUTH_LOGOUT_URL || '/logout',
  QUEUE_SERVER: envs.TILSKUDD_QUEUE_SERVER || 'localhost/queue',
  CALLBACK_STATUS_URL: envs.TILSKUDD_CALLBACK_STATUS_URL || 'https://test.tilskudd.t-fk.no/api'
}
