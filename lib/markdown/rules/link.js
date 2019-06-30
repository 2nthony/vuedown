const isExternalLink = link => /^https?:\/\//.test(link)

module.exports = (renderer, options) => {
  renderer.link = (href, title = '', text) => {
    if (options.routerLink && !isExternalLink(href)) {
      return `<router-link to="${href}">${text}</router-link>`
    }

    return `<a href="${href}" title="${title}" ${isExternalLink(href) &&
      'target="_blank"'}>${text}</a>`
  }
}
