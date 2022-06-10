import tsPlugin from 'rollup-plugin-typescript2'
import jsonPlugin from 'rollup-plugin-json'
export default {
  input: 'bin/main.ts',
  output: [
    {
      file: 'dist/main.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/main.mjs',
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    {
      file: 'dist/main.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [tsPlugin(), jsonPlugin()],
}
