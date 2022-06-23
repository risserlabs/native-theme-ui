/**
 * File: /components/Image/Image.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 23-06-2022 07:51:16
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
  createArgsStory,
  createSxArgs,
  sxArgTypes
} from '../../storybook';
import Image from './index';

storiesOf('Image', module)
  .add('default', createArgsStory(Image), {
    args: {
      src: 'https://picsum.photos/200/300',
      ...createSxArgs(Image)
    },
    argTypes: {
      ...sxArgTypes
    }
  })
  .add(
    'Styled image',
    () => (
      <Image
        source={{
          uri: 'https://source.unsplash.com/user/c_v_r/1900x800'
        }}
        sx={{
          width: 150,
          height: 150,
          borderRadius: 150 / 2,
          overflow: 'hidden',
          borderWidth: 3,
          borderColor: 'primary'
        }}
      />
    ),
    {
      component: Image,
      status: { type: 'beta' }
    }
  );
