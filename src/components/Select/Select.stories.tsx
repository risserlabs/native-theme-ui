/**
 * File: /components/Select/Select.stories.tsx
 * Project: -
 * File Created: 17-06-2022 06:16:36
 * Author: Harikittu46
 * -----
 * Last Modified: 22-06-2022 07:00:56
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
import {
  Args,
  createArgsStory,
  createSxArgs,
  storiesOf,
  sxArgTypes
} from '../../storybook';
import Select from './index';
import Box from '../Box';

storiesOf('Select', module)
  .add(
    'default',
    createArgsStory(Select, {}, [
      <Select.Option key="0">hello</Select.Option>,
      <Select.Option key="1">world</Select.Option>
    ]),
    {
      args: {
        autoContrast: Select.defaultProps?.autoContrast,
        ...createSxArgs(Select)
      },
      argTypes: {
        autoContrast: {
          options: ['A', 'AA', 'AAA', false],
          control: 'select'
        },
        ...sxArgTypes
      }
    }
  )
  .add(
    'with background',
    (args: Args) => (
      <Box
        sx={{
          padding: 2,
          bg: args.background
        }}
      >
        <Select autoContrast={args.autoContrast}>
          <Select.Option>hello</Select.Option>
          <Select.Option>world</Select.Option>
        </Select>
      </Box>
    ),
    {
      args: {
        background: 'black',
        autoContrast: 'AAA'
      },
      argTypes: {
        background: { control: { type: 'color' } },
        autoContrast: {
          options: ['A', 'AA', 'AAA', false],
          control: 'select'
        }
      }
    }
  );
