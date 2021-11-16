var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: {
    background: path.resolve(__dirname, 'src/background.ts'),
    contentScript: path.resolve(__dirname, 'src/contentScript.ts'),
    devtools: path.resolve(__dirname, 'src/devtools.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: require.resolve('webextension-polyfill'),
          to: path.resolve(__dirname, 'dist/browser-polyfill.js')
        },
        {
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, 'dist/manifest.json')
        },
        {
          from: path.resolve(__dirname, 'out'),
          to: path.resolve(__dirname, 'dist/out')
        },
        {
          from: path.resolve(__dirname, 'out/_next'),
          to: path.resolve(__dirname, 'dist/out/next')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  useBuiltIns: 'entry',
                  targets: {
                    node: '6'
                  }
                }
              ],
              '@babel/preset-typescript'
            ],
            plugins: [
              'babel-plugin-macros',
              'babel-plugin-transform-typescript-metadata',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      }
    ]
  },
  infrastructureLogging: {
    level: 'log'
  }
};
