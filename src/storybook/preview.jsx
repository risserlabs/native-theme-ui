import { DripsyProvider } from 'dripsy';
import { addDecorator } from '@storybook/react';
import { themes as storybookThemes } from '@storybook/theming';
import { withDesign } from 'storybook-addon-designs';
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';
import { withThemes } from 'storybook-addon-themes/react';
import * as themes from '../themes';

export const parameters = {
  globalsControls: {},
  status: {
    statuses: {
      released: {
        background: '#0000ff',
        color: '#ffffff',
        description: 'This component is stable and released'
      }
    }
  },
  darkMode: {
    dark: { ...storybookThemes.dark },
    light: { ...storybookThemes.normal }
  },
  themes: {
    default: 'main',
    clearable: false,
    onChange: (themeName) => {},
    list: Object.entries(themes).map(([name, theme]) => ({
      name,
      themeUI: theme,
      color: theme.colors.primary
    })),
    Decorator: (props) => (
      <DripsyProvider theme={props.theme.themeUI}>
        {props.children}
      </DripsyProvider>
    )
  }
};

export const loaders = [];

const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

addDecorator(withDesign);
addDecorator(withDisplayGlobals);
addDecorator(withThemes);

export const globalTypes = {
  boolean: {
    name: 'Boolean',
    description: 'Boolean Description',
    defaultValue: true,
    control: { type: 'boolean' }
  }
};
