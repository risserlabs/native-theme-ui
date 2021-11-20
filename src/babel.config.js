module.exports = (api) => {
  const isNative =
    process.argv.join(' ').indexOf('@storybook/react-native-server') > -1;
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ...(isNative
        ? [
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-private-property-in-object',
            '@babel/plugin-proposal-class-properties'
          ]
        : [
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            [
              '@babel/plugin-proposal-private-property-in-object',
              { loose: true }
            ],
            ['@babel/plugin-proposal-class-properties', { loose: true }]
          ]),
      'babel-plugin-macros',
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime'
    ]
  };
};
