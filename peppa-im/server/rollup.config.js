import tsPlugin from 'rollup-plugin-typescript2'
import jsonPlugin from 'rollup-plugin-json'
import PKG from './package.json'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: PKG.esm,
      format: 'esm'
    },
    {
      file: PKG.cjs,
      format: 'cjs',
    },
  ],
  plugins: [tsPlugin(), jsonPlugin()],
}