import { withKnobs } from '@storybook/addon-knobs';
import { Platform } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator
} from '@storybook/react-native';
import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-async-storage/async-storage').default
});

export default StorybookUIRoot;
