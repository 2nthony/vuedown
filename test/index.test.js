import test from 'ava'
import vuedown from '../lib'

function snapshot(title, text, options) {
  test(title, t => {
    t.snapshot(vuedown(text, options))
  })
}

snapshot(
  'basic',
  `
# Say hi

<greet name="evillt" />
`
)

snapshot(
  'with vue features',
  `
# I'm {{ name }}

<script>
export default {
  data() {
    return {
      name: 'evillt'
    }
  }
}
</script>
`
)

snapshot(
  'wrap html',
  `
# Hi there
`,
  {
    wrapHTML: html => `<div class="wrapper">${html}</div>`
  }
)
