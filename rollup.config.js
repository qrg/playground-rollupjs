import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/entry.js',
  format: 'cjs',
  plugins: [
    babel()
  ],
  dest: 'dest/bundle.js'
};
