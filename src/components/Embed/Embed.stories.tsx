import React from 'react';
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes
} from '../../storybook';
import Embed from './index';

storiesOf('Embed', module).add('default', createArgsStory(Embed), {
  args: {
    children: 'I am a Embed Component',
    autoContrast: Embed.defaultProps?.autoContrast,
    ...createSxArgs(Embed)
  },
  argTypes: {
    autoContrast: {
      options: ['A', 'AA', 'AAA', false],
      control: 'select'
    },
    ...sxArgTypes
  }
});
    .add('default', createArgsStory(Embed), {
    args: {
      children: 'I am Embed Component',
      autoContrast: Embed.defaultProps?.autoContrast,
      ...createSxArgs(Embed)
      
    }
    }
    argTypes: {
      autoContrast: {
        options: ['A', 'AA', 'AAA', false],
        control: 'select'
      },
      ...sxArgTypes
    }
  );

    

   
