module.exports = (api) => {
  api.cache(true);
  return {
    babelrcRoots: ['.', './app', './platforms/*'],
    presets: ['@expo/next-adapter/babel'],
    plugins: ['react-native-reanimated/plugin'],
    overrides: [
      {
        test: './node_modules/react-native-reanimated/*',
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    ]
  };
};
