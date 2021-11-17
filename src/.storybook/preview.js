import { ThemeProvider, themes, convert } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls';
import { withThemes } from '@react-theming/storybook-addon';
import { createDecorator, setParameters } from '@storybook/addon-devkit';

themes.light.name = themes.light.base;
themes.dark.name = themes.dark.base;

export const parameters = {
  // themes: {
  //   default: 'twitter',
  //   list: [
  //     { name: 'twitter', class: 'theme-twt', color: '#00aced' },
  //     { name: 'facebook', class: 'theme-fb', color: '#3b5998' }
  //   ]
  // },
  status: {
    statuses: {
      released: {
        background: '#0000ff',
        color: '#ffffff',
        description: 'This component is stable and released'
      }
    }
  },
  globalsControls: {}
};

export const loaders = [];

const themingDecorator = withThemes(null, [themes.light, themes.dark], {
  providerFn: ({ theme, children }) => (
    <ThemeProvider theme={convert(theme)}>{children}</ThemeProvider>
  )
});
const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

// addDecorator(themingDecorator);
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
