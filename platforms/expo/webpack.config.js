const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = (config, argv) =>
  createExpoWebpackConfigAsync(
    {
      ...config,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['-']
      }
    },
    argv
  );
