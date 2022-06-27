/**
 * File: /components/Badge/Badge.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:30
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
  storiesOf,
  createSxArgs,
  createArgsStory,
  sxArgTypes
} from '../../storybook';
import Badge from '.';

storiesOf('Badge', module)
  .add('default', createArgsStory(Badge), {
    args: {
      children: 'Iam Badge Component',
      autoContrast: Badge.defaultProps?.autoContrast,
      ...createSxArgs(Badge)
    },
    argTypes: {
      autoContrast: {
        options: ['A', 'AA', 'AAA', false],
        control: 'select'
      },
      ...sxArgTypes
    }
  })
  .add('Accent Badge', () => <Badge variant="accent">Badge</Badge>, {
    component: Badge,
    status: { type: 'beta' }
  })
  .add('Outline Badge', () => <Badge variant="outline">Badge</Badge>, {
    component: Badge,
    status: { type: 'beta' }
  })
  .add('Circle Badge', () => <Badge variant="circle">16</Badge>, {
    component: Badge,
    status: { type: 'beta' }
  });
