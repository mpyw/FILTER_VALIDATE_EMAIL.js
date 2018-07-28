import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'FilterValidateEmail',
    indent: env === 'development',
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}

if (env === 'production') {
  config.plugins.push(
    uglify(),
  )
}

export default config
