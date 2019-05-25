function resolveREtag(tag, endTag) {
  return new RegExp(
    `(<!--\\s*?)?<${tag}[\\s\\S]*>[\\s\\S]*<\\/${endTag || tag}>(\\s*?-->)?`,
    'g'
  )
}

exports.REscript = resolveREtag('script')
exports.REstyle = resolveREtag('style')
exports.REcustomBlock = resolveREtag('cb-')

exports.isExternalLink = link => {
  return /^https?:\/\//.test(link)
}
