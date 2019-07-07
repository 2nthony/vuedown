const marked = require('./marked')
const markedRenderer = require('./markedRenderer')

module.exports = (input, options, env) => {
  const renderer = markedRenderer(options, env)

  const { extendMarkedRenderer } = options
  if (typeof extendMarkedRenderer === 'function') {
    extendMarkedRenderer(renderer)
  }

  const html = marked(input, {
    renderer,
    ...options
  })

  return html
}
