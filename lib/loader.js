const { getOptions } = require('loader-utils')

const compiler = require('.')

module.exports = function(source) {
  const opts = getOptions(this) || {}
  return compiler(source, opts)
}
