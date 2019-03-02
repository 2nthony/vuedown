const MarkdownIt = require('markdown-it')
const { REscript, REstyle, REcustomBlock } = require('./utils')

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

module.exports = function(source, opts) {
  const md = new MarkdownIt({ html: true, ...opts })
  const matchContentByRe = matchContent(source)

  const template = `<template>
  <div class="vuedown">
    {markdown}
  </div>
</template>

{script}

{style}

{custom-blocks}`

  return template
    .replace('{markdown}', md.render(matchMarkdown(source)))
    .replace('{script}', matchContentByRe(REscript))
    .replace('{style}', matchContentByRe(REstyle))
    .replace('{custom-blocks}', matchContentByRe(REcustomBlock))
}
