# vuedown

> 📝Your Markdown is your Vue SFC.

[![NPM version](https://badgen.net/npm/v/vuedown)](https://npmjs.com/package/vuedown)
[![NPM download](https://badgen.net/npm/dm/vuedown)](https://npmjs.com/package/vuedown)
![NPM License](https://badgen.net/npm/license/vuedown)
[![buy me a coffee](https://badgen.net/badge/buy%20me%20a/coffee/a71)](https://patreon.com/evillt)

## Features

- Use most Vue SFC features in markdown files

Combine `vue-loader` and `vuedown/loader` to make it come to reality.

## Install

```sh
yarn add vuedown --dev
```

## Example

Previously you can use the `.md` file like `.html`:

```markdown
# Hello

> I'm a markdown file

<button>button</button>
```

Now with `vuedown` you can use the `.md` file like `.vue`:

```markdown
# {{ title }}

> I'm a markdown file

<button @click="inc">Count: {{ count }}</button>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      count: 0
    }
  },
  methods: {
    inc() {
      this.count++
    }
  }
}
</script>
```

## How to use

### Use with webpack

```js
module.exports = {
  module: {
    rules: [
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: 'vuedown/loader'
        }
      ]
    ]
  }
}
```

That's it, [all the goodies](https://vue-loader.vuejs.org/) of `.vue` SFC is available in your `.md` files now!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vuedown** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/vuedown/contributors)).

> [github.com/evillt](https://github.com/evillt) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
