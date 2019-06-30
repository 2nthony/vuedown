const marked = require('./markdown/marked')
const getMarkdown = require('./markdown')

const defaultWrapHTML = html => `<div class="vuedown">${html}</div>`

const vuedown = (input, options = {}) => {
  const html = getMarkdown(input, options)
  const wrapHTML = options.wrapHTML || defaultWrapHTML

  const component = `<template>
  ${wrapHTML(html)}
</template>

${options.hoistedTags ? options.hoistedTags.join('\n\n') : ''}`

  return component
}

vuedown.marked = marked

module.exports = vuedown
