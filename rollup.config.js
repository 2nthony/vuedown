import { terser } from 'rollup-plugin-terser'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [cjs(), terser(), resolve()]
}
