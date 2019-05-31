const getOptions = require('loader-utils/lib/getOptions')

const compiler = require('.')

module.exports = function(source) {
  const opts = getOptions(this) || {}
  return compiler(source, opts)
}
