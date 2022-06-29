/**
 * File: /components/IconButton/IconButton.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 29-06-2022 04:24:44
 * Modified By: Manikanta
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
  createArgsStory,
  sxArgTypes,
  createSxArgs
} from '../../storybook';
import IconButton from '.';

storiesOf('IconButton', module)
  .add('default Icon', createArgsStory(IconButton), {
    args: {
      children: 'Iam Icon Button ',
      autoContrast: IconButton.defaultProps?.autoContrast,
      ...createSxArgs(IconButton)
    },
    argTypes: {
      autoContrast: {
        options: ['A', 'AA', 'AAA', false],
        control: 'select'
      },
      ...sxArgTypes
    }
  })

  .add(
    'Home IconButton',
    () => (
      <IconButton
        source={require('../../assets/homeIcon.png')}
        iconSx={{
          width: 30,
          height: 30,
          overflow: 'hidden'
        }}
        onPress={() => console.log('HOME ICON PRESSED')}
      />
    ),
    {
      component: IconButton,
      status: { type: 'beta' }
    }
  )
  .add(
    'Notification IconButton',
    () => (
      <IconButton
        source={require('../../assets/notificationIcon.png')}
        iconSx={{
          width: 30,
          height: 30,
          overflow: 'hidden'
        }}
        onPress={() => console.log('NOTIFICATION ICON PRESSED')}
      />
    ),
    {
      component: IconButton,
      status: { type: 'beta' }
    }
  );
