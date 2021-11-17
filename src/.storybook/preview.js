import React from 'react';
import { ThemeProvider, convert, themes } from '@storybook/theming';

export const parameters = {};

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={convert(themes.light)}>
      <StoryFn />
    </ThemeProvider>
  )
];

export const loaders = [];
