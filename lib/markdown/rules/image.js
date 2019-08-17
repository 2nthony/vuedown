module.exports = (renderer, options) => {
  if (options.imageLazyLoading) {
    renderer.image = (href, title, text) => {
      return `<img src="${href}" title="${title}" alt="${text}" loading="lazy">`
    }
  }
}
