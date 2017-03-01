const set = require('libnested').set
const camelCase = require('camelcase')

module.exports = envToObj

function envToObj (env) {
  var obj = {}
  for (var envKey in env) {
    const envValue = env[envKey]
    const value = coerce(envValue)
    const path = envKeyToPath(envKey)
    set(obj, path, value)
  }
  return obj
}

function envKeyToPath (envKey) {
  return envKey
    .split('__')
    .map(str => camelCase(str))
}

function coerce (value) {
  if (isNumber(value)) {
    return toNumber(value)
  } else if (isBoolean(value)) {
    return toBoolean(value)
  } else if (isNull(value)) {
    return toNull(value)
  } else if (isUndefined(value)) {
    return toUndefined(value)
  } else {
    return value
  }
}

function isNumber (value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

function toNumber (value) {
  return parseFloat(value)
}

function isBoolean (value) {
  return value === 'true' || value === 'false'
}

function toBoolean (value) {
  return value === 'true'
}

function isNull (value) {
  return value === 'null'
}

function toNull (value) {
  return null
}

function isUndefined (value) {
  return value === 'undefined'
}

function toUndefined (value) {
  return undefined
}
