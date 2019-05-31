import { terser } from 'rollup-plugin-terser'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const format = 'cjs'
const plugins = [cjs(), terser(), resolve()]

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format
    },
    plugins
  },
  {
    input: 'lib/loader.js',
    output: {
      file: 'dist/loader.js',
      format
    },
    external: ['.'],
    plugins
  }
]
