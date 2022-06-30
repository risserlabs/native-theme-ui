module.exports = (api) => {
  api.cache(true);
  return {
    babelrcRoots: ['.', './src', './platforms/*'],
    presets: [],
    plugins: [],
    overrides: []
  };
};
