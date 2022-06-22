/**
 * File: /components/Button/Button.stories.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:26
 * Author: Clay Risser
 * -----
 * Last Modified: 21-06-2022 08:06:03
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2021 - 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf, createDefaultStory } from '../../storybook';
import Button from './index';
import Text from '../Text';

storiesOf('Button', module)
  .add('default', createDefaultStory(Button), {
    args: {
      children: 'Click Me',
      hidden: Button.defaultProps?.hidden,
      autoContrast: Button.defaultProps?.autoContrast,
      sxBg: Button.defaultSx.bg,
      sxM: Button.defaultSx.m,
      sxP: Button.defaultSx.p,
      sxFontSize: Button.defaultSx.fontSize,
      sxColor: Button.defaultSx.color,
      sxHeight: Button.defaultSx.height,
      sxWidth: Button.defaultSx.width
    },
    argTypes: {
      hidden: { control: { type: 'boolean' } },
      autoContrast: {
        options: ['A', 'AA', 'AAA', false],
        control: 'select'
      },
      sxBg: { control: { type: 'color' } },
      sxColor: { control: { type: 'color' } },
      sxM: { control: 'number' },
      sxP: { control: 'number' },
      sxHeight: { control: 'number' },
      sxWidth: { control: 'number' }
    }
  })
  .add('with text component', () => (
    <Button>
      <Text>hello</Text>
    </Button>
  ))
  .add('with events', () => (
    <Button
      onPress={action('I was pressed')}
      onLongPress={action('I was long pressed')}
      onPressIn={action('I was pressed in')}
      onPressOut={action('I was pressed out')}
    >
      Click Me
    </Button>
  ));
