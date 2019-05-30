import { terser } from 'rollup-plugin-terser'
import cjs from 'rollup-plugin-commonjs'

const format = 'cjs'

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format
    },
    plugins: [cjs(), terser()]
  },
  {
    input: 'lib/loader.js',
    output: {
      file: 'dist/loader.js',
      format
    },
    plugins: [terser()]
  }
]
