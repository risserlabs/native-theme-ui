/**
 * File: /components/Avatar/Avatar.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:12
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
import { storiesOf } from '../../storybook';
import Avatar from '.';

storiesOf('Avatar', module)
  .add(
    'Simple Avatar',
    () => (
      <Avatar
        sx={{
          width: 50,
          height: 50,
          borderRadius: 25
        }}
        name={'UI'}
        isImage={false}
      />
    ),
    {
      component: Avatar,
      status: { type: 'beta' }
    }
  )
  .add(
    'Image Avatar',
    () => (
      <Avatar
        isImage
        uri={'https://picsum.photos/200'}
        sx={{
          width: 50,
          height: 50,
          borderRadius: 25
        }}
      />
    ),
    {
      component: Avatar,
      status: { type: 'beta' }
    }
  );
