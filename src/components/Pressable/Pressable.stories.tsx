/**
 * File: /components/Pressable/Pressable.stories.tsx
 * Project: -
 * File Created: 27-02-2022 12:19:39
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 08:08:22
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
import Pressable from '.';
import { storiesOf } from '../../storybook';
import Text from '../Text';

storiesOf('Pressable', module)
  .add(
    'with text',
    () => (
      <Pressable onPress={action('clicked-text')}>
        <Text>Button text</Text>
      </Pressable>
    ),
    {
      component: Pressable,
      status: { type: 'beta' }
    }
  )
  .add(
    'with some emoji',
    () => (
      <Pressable onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯 :)</Text>
      </Pressable>
    ),
    {
      component: Pressable,
      status: { type: 'beta' }
    }
  );
