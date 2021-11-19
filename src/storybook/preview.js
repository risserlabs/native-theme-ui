import { addDecorator } from '@storybook/react';
import { base, funk } from '@theme-ui/presets';
import { withDesign } from 'storybook-addon-designs';
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';
import { withThemeProvider } from 'storybook-addon-theme-ui';

export const parameters = {
  globalsControls: {},
  themeUi: {
    themes: [
      { theme: base, name: 'base' },
      { theme: funk, name: 'funk' }
    ]
  },
  status: {
    statuses: {
      released: {
        background: '#0000ff',
        color: '#ffffff',
        description: 'This component is stable and released'
      }
    }
  }
};

export const loaders = [];

const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

addDecorator(withDesign);
addDecorator(withDisplayGlobals);
addDecorator(withThemeProvider);

export const globalTypes = {
  boolean: {
    name: 'Boolean',
    description: 'Boolean Description',
    defaultValue: true,
    control: { type: 'boolean' }
  }
};
