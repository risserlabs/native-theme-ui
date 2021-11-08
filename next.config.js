const withPlugins = require('next-compose-plugins');
const withTranspileModules = require('next-transpile-modules');
const { withExpo } = require('@expo/next-adapter');

module.exports = withPlugins(
  [
    withTranspileModules(['react-native-web']),
    [withExpo, { projectRoot: __dirname }]
  ],
  {}
);
