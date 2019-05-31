const marked = require('./utils/marked')
const { REscript, REstyle, REcustomBlock } = require('./utils')
const markedRenderer = require('./utils/markedRenderer')

function matchMarkdown(source) {
  return source
    .replace(REscript, '')
    .replace(REstyle, '')
    .replace(REcustomBlock, '')
}

function matchContent(source) {
  return function(re) {
    return source.match(re) || ''
  }
}

module.exports = function(source, _opts) {
  const matchContentByRe = matchContent(source)
  const opts = Object.assign(
    {
      routerLink: true
    },
    _opts
  )

  const routerLink = opts.routerLink
  delete opts.routerLink

  const template = `<template>
  {markdown}
</template>

{script}

{style}

{custom-blocks}`

  let wrappedHTML = ''
  const html = marked(
    matchMarkdown(source),
    Object.assign(
      {
        renderer: markedRenderer({ routerLink })
      },
      opts
    )
  )

  if (typeof opts.wrapHTML === 'function') {
    wrappedHTML = opts.wrapHTML(html, source)
  } else {
    wrappedHTML = `<div class="vuedown">${html}</div>`
  }

  return template
    .replace('{markdown}', wrappedHTML)
    .replace('{script}', matchContentByRe(REscript))
    .replace('{style}', matchContentByRe(REstyle))
    .replace('{custom-blocks}', matchContentByRe(REcustomBlock))
}

module.exports.marked = marked
