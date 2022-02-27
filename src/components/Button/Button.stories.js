/**
 * File: /components/Button/Button.stories.js
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 27-02-2022 10:28:10
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
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import Button from '.';
import CenterView from '../CenterView';
// import { storiesOf } from '../../storybook';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add(
    'with text',
    () => (
      <Button onPress={action('clicked-text')}>
        <Text>Button text</Text>
      </Button>
    ),
    {
      component: Button,
      status: { type: 'beta' }
    }
  )
  .add(
    'with some emoji',
    () => (
      <Button onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯 :)</Text>
      </Button>
    ),
    {
      component: Button,
      status: { type: 'beta' }
    }
  );
