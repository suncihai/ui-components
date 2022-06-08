import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve'; // This plugin includes the third-party external dependencies into our final bundle (we don't have any dependencies for this tutorial, but you'll definitely need them as your library grows).
import commonjs from '@rollup/plugin-commonjs';
import tsConfigPaths from 'rollup-plugin-ts-paths';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

export default {
  input: 'src/index.ts', // entry point for roll up to our library
  output: [
    // how files will be outputted, we will read the outputs from package.json
    {
      file: packageJson.main,
      format: 'cjs',
      globals,
      sourcemap: true,
    },
    // esm module is 'tree shakeable'
    {
      file: packageJson.module,
      format: 'esm',
      globals,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: false }),
    resolve(),
    postcss({
      extract: false,
      plugins: [postcssImport(), postcssNested(), autoprefixer()],
      extensions: ['.css'],
    }),
    commonjs({
      include: ['node_modules/**', 'src/breakpoints.js'],
      namedExports: {
        'src/breakpoints.js': ['breakpoints'],
        'node_modules/react-responsive/src/index.js': ['useMediaQuery'],
      },
    }),
    tsConfigPaths(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    //terser(),
  ],
};
