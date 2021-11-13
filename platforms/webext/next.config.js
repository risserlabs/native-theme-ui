const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withTranspileModules = require('next-transpile-modules');
const { withExpo } = require('@expo/next-adapter');

module.exports = withPlugins(
  [
    withTranspileModules(['react-native-web', 'app']),
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true'
    }),
    [withExpo, { projectRoot: __dirname }]
  ],
  {}
);
