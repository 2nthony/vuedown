const RE = /^<(script|style)(?=(\s|>|$))/i

module.exports = (renderer, options) => {
  renderer.html = content => {
    const hoistedTags = options.hoistedTags || (options.hoistedTags = [])

    if (RE.test(content.trim())) {
      hoistedTags.push(content)
      return ''
    }

    return content
  }
}
