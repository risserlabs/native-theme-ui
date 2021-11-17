import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|md|mdx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-storyshots',
    '@storybook/addon-a11y'
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {}
  },
  core: {
    builder: 'webpack5'
  },
  features: {
    postcss: false,
    buildStoriesJson: true
  },
  webpackFinal: async (config, {}) => ({
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web'
      }
    },
    ...config
  })
};
module.exports = config;
