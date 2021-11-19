import { DripsyProvider } from 'dripsy';
import { addDecorator } from '@storybook/react';
import { themes as storybookThemes } from '@storybook/theming';
import { withDesign } from 'storybook-addon-designs';
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';
import { withThemes } from '@react-theming/storybook-addon';
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
  facelift: {}
  // darkMode: {
  //   dark: { ...storybookThemes.dark },
  //   light: { ...storybookThemes.normal }
  // }
};

export const loaders = [];

const themingDecorator = withThemes(
  null,
  Object.entries(themes).map(([name, theme]) => {
    theme.name = name;
    return theme;
  }),
  {
    providerFn: ({ theme, children }) => {
      return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
    },
    onThemeSwitch: (_context) => {
      return { parameters: { backgrounds: null } };
    }
  }
);
const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

addDecorator(withDesign);
addDecorator(withDisplayGlobals);
// addDecorator(themingDecorator);
addDecorator((Root) => (
  <DripsyProvider theme={themes.sketchy}>
    <Root />
  </DripsyProvider>
));

export const globalTypes = {
  boolean: {
    name: 'Boolean',
    description: 'Boolean Description',
    defaultValue: true,
    control: { type: 'boolean' }
  }
};
