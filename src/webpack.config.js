const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = (config, argv) =>
  createExpoWebpackConfigAsync({ ...config }, argv);
