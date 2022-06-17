import React from 'react';
import { storiesOf } from '../../storybook';
import Paragraph from './index';

storiesOf('Paragraph', module).add('with background', () => (
  <Paragraph>Paragrapgh`</Paragraph>
));
