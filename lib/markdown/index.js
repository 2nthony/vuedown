const marked = require('./marked')
const markedRenderer = require('./markedRenderer')

module.exports = (input, options, env) => {
  const html = marked(input, {
    renderer: markedRenderer(options, env),
    ...options
  })

  return html
}
