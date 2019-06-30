# vuedown

> 📝Use most Vue-component features in markdown files

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/vuedown?icon=npm)](https://npmjs.com/package/vuedown)
[![NPM download](https://badgen.net/npm/dm/vuedown?icon=npm)](https://npmjs.com/package/vuedown)
[![CircleCI](https://badgen.net/circleci/github/evillt/vuedown?icon=circleci)](https://circleci.com/gh/evillt/vuedown/tree/master)
[![License](https://badgen.net/npm/license/vuedown)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

## Table of Contents

- [Usage](#Usage)
- [Use with bundlers](#Use-with-bundlers)

## Features

- Support `@` in attribute names
- ~~Convert link to `<router-link>` by default~~
- Support convert `<a>` to `<router-link>`

## Install

```console
yarn add vuedown --dev
```

## Usage

In:

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

Out:

```html
<template>
  <div class="vuedown">
    <h1>{{ title }}</h1>

    <p>
      <blockquote>I'm a markdown file</blockquote>
    </p>

    <p>
      <button @click="inc">Count: {{ count }}</button>
    </p>
  </div>
</template>

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

Code:

```js
const component = vuedown(input)
// Get the component in Vue SFC format
```

## Use with bundlers

Combine `vue-loader` and `vuedown/loader` to use most Vue-Component features in markdown files

In your `webpack.config.js`:

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

Or in `{vue,poi}.config.js`:

```js
module.exports = {
  chainWebpack(config) {
    config.module
      .rule('vuedown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vuedown-loader')
      .loader('vuedown/loader')
  }
}
```

## API

### `vuedown(input, [options])`

#### `input`

- Type: `string`
- Required: `true`

The markdown string.

#### `options`

Options for [marked.options](https://marked.js.org/#/USING_ADVANCED.md#options).

#### `options.routerLink`

- Type: `boolean`
- Default: `false`

Convert `<a>` to `<router-link>` but external link will always be `<a target="_blank">`.

#### `options.wrapHTML`

- Type: `(html: string) => string`
- Default: <code>html => &#x60;&lt;div class="vuedown"&gt;\${html}&lt;/div&gt;&#x60;</code>

Wrap the HTML in an element.

### `vuedown.marked: marked`

[marked](https://marked.js.org)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vuedown** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/vuedown/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
