import React from 'react';
import { storiesOf } from '../../storybook';
import Embed from './index';

storiesOf('Embed', module)
  .add('default', () => <Embed></Embed>)
  .add('with background', () => <Embed></Embed>);
