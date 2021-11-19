import React from 'react';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import Button from '.';
import CenterView from '../CenterView';
import { storiesOf } from '../../storybook';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add(
    'with text',
    () => (
      <Button onPress={action('clicked-text')}>
        <Text>Button text</Text>
      </Button>
    ),
    {
      component: Button,
      status: { type: 'beta' }
    }
  )
  .add(
    'with some emoji',
    () => (
      <Button onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯 :)</Text>
      </Button>
    ),
    {
      component: Button,
      status: { type: 'beta' }
    }
  );
