const marked = require('./marked')
const { isExternalLink } = require('.')

module.exports = opts => {
  const renderer = new marked.Renderer()

  renderer.link = (href, title = '', text) => {
    if (opts.routerLink && !isExternalLink(href)) {
      return `<router-link to="${href}">${text}</router-link>`
    }

    return `<a href="${href}" title="${title}" ${isExternalLink(href) &&
      'target="_blank"'}>${text}</a>`
  }

  return renderer
}
