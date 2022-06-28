/**
 * File: /components/Alert/Alert.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 01:39:27
 * Modified By: Lavanya Katari
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
import Close from '../Close';
import Alert from '.';
import {
  createArgsStory,
  createSxArgs,
  storiesOf,
  sxArgTypes
} from '../../storybook';

storiesOf('Alert', module)
  .add('default', createArgsStory(Alert), {
    args: {
      children: 'I am Alert',
      ...createSxArgs(Alert)
    },
    argTypes: {
      autoContrast: {
        option: ['A', 'AA', 'AAA', false],
        control: 'select'
      },
      ...sxArgTypes
    }
  })
  .add(
    'default',
    () => (
      <>
        <Alert variant="primary" sx={{ mb: 1 }}>
          Primary
        </Alert>
        <Alert variant="secondary" sx={{ mb: 1 }}>
          Secondary
        </Alert>
      </>
    ),
    {
      component: Alert,
      status: { type: 'beta' }
    }
  )
  .add(
    'like theme ui',
    () => (
      <Alert>
        Beep boop, this is an alert! <Close />
      </Alert>
    ),
    {
      component: Alert,
      status: { type: 'beta' }
    }
  );
