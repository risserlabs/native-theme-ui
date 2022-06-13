/**
 * File: /components/Progress/Progress.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:57:25
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
import Box from '../Box';
import Progress from '.';
import { storiesOf } from '../../storybook';

storiesOf('Progress', module)
  .add('default 50% progress', () => <Progress max={100} value={50} />, {
    component: Progress,
    status: { type: 'beta' }
  })
  .add('40% progress', () => <Progress max={100} value={40} />, {
    component: Progress,
    status: { type: 'beta' }
  })
  .add(
    'progress with max=200 and value=80',
    () => <Progress max={200} value={80} />,
    {
      component: Progress,
      status: { type: 'beta' }
    }
  )
  .add(
    'like theme-ui',
    () => (
      <Progress max={1} value={1 / 2}>
        50%
      </Progress>
    ),
    {
      component: Progress,
      status: { type: 'beta' }
    }
  )
  .add(
    'with background with 70%',
    () => (
      <Box sx={{ bg: 'black', p: 4 }}>
        <Progress max={100} value={70}>
          70%
        </Progress>
      </Box>
    ),
    {
      component: Progress,
      status: { type: 'beta' }
    }
  )
  .add(
    'with background with 70%',
    () => (
      <Box sx={{ bg: 'black', p: 4 }}>
        <Progress max={100} value={70} />
      </Box>
    ),
    {
      component: Progress,
      status: { type: 'beta' }
    }
  );
