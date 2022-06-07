import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve'; // This plugin includes the third-party external dependencies into our final bundle (we don't have any dependencies for this tutorial, but you'll definitely need them as your library grows).
import commonjs from '@rollup/plugin-commonjs';
import tsConfigPaths from 'rollup-plugin-ts-paths';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts', // entry point for roll up to our library
  output: [
    // how files will be outputted, we will read the outputs from package.json
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    // esm module is 'tree shakeable'
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    postcss({
      extract: false,
      plugins: [postcssImport(), postcssNested(), autoprefixer()],
      extensions: ['.css'],
    }),
    commonjs(),
    tsConfigPaths(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
