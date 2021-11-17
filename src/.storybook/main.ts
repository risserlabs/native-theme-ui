import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|md|mdx)'],
  logLevel: 'debug',
  addons: [
    '@etchteam/storybook-addon-status',
    '@luigiminardim/storybook-addon-globals-controls',
    '@pbutlewski/storybook-html',
    '@react-theming/storybook-addon',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-ie11',
    '@storybook/addon-links',
    '@storybook/addon-storyshots',
    '@storybook/addon-storysource',
    'addon-screen-reader',
    'storybook-addon-breakpoints',
    'storybook-addon-grid',
    'storybook-addon-paddings',
    // 'storybook-addon-themes',
    'storybook-color-picker',
    'storybook-mobile'
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
