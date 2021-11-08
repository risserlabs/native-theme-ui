// module.exports = { presets: ['@expo/next-adapter/babel'] };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};
