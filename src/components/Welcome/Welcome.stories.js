import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Welcome from '.';
import { storiesOf } from '../../storybook';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));
