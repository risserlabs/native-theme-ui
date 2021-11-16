const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const webExtensionConfig = {
  mode: 'none',
  target: 'webworker',
  entry: {
    extension: './src/extension.ts',
    'test/suite/index': './src/test/suite/index.ts'
  },
  output: {
    devtoolModuleFilenameTemplate: '../../[resource-path]',
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './dist')
  },
  resolve: {
    alias: {},
    extensions: ['.ts', '.js'],
    mainFields: ['browser', 'module', 'main'],
    fallback: {
      assert: require.resolve('assert')
    }
  },
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
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new NodePolyfillPlugin({ excludeAliases: [] })
  ],
  externals: {
    vscode: 'commonjs vscode'
  },
  performance: {
    hints: false
  },
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    level: 'log'
  }
};

module.exports = [webExtensionConfig];
