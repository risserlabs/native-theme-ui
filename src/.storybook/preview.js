import { ThemeProvider, themes, convert } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';

export const parameters = {
  facelift: {},
  globalsControls: {},
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

export const globalTypes = {
  boolean: {
    name: 'Boolean',
    description: 'Boolean Description',
    defaultValue: true,
    control: { type: 'boolean' }
  }
};
