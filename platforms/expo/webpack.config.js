const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = (config, argv) =>
  createExpoWebpackConfigAsync(
    {
      ...config,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["-", "dripsy", "@dripsy/core"],
      },
    },
    argv
  );
