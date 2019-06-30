const marked = require('./marked')
const link = require('./rules/link')
const html = require('./rules/html')

module.exports = options => {
  const renderer = new marked.Renderer(options)

  link(renderer, options)

  html(renderer, options)

  return renderer
}
