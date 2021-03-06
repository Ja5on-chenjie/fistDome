import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only'
import * as ts from 'typescript';

export default {
  entry: 'app/app.main.ts',
  sourceMap: true,
  moduleName: 'main',
  plugins: [
    typescript({
      typescript: ts
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    css({ output: 'dist/bundle.css' })
  ]
};
