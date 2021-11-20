import React from 'react';
import { DripsyProvider } from 'dripsy';
import { Platform } from 'react-native';
import { withKnobs } from '@storybook/addon-knobs';
import {
  getStorybookUI,
  configure,
  addDecorator
} from '@storybook/react-native';
import './rn-addons';
import * as themes from '../themes';

addDecorator(withKnobs);
addDecorator((Root: any) => (
  <DripsyProvider theme={themes.main as any}>
    <Root />
  </DripsyProvider>
));

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-async-storage/async-storage').default
});

export default StorybookUIRoot;
