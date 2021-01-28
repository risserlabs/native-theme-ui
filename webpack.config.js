const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'web',
  resolve: {
    extensions: ['.mjs', '.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    library: '<%= _.camelCase(name) %>',
    libraryExport: 'default',
    libraryTarget: 'assign',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    'react-native': true
  },
  module: {
    rules: [
      {
        test: /\.(m?js)|([jt]sx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            envName: 'umd'
          }
        }
      }
    ]
  }
};
