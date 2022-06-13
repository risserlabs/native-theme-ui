/**
 * File: /components/Spinner/Spinner.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:57:38
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
import { Box } from 'dripsy';
import Spinner from '.';
import { storiesOf } from '../../storybook';

storiesOf('Spinner', module)
  .add(
    'size',
    () => (
      <div style={{ display: 'flex', gap: 10 }}>
        <Spinner size="small" /> <Spinner size="large" />
      </div>
    ),
    {
      component: Spinner,
      status: { type: 'beta' }
    }
  )
  .add('like theme-ui', () => <Spinner color="primary" />, {
    component: Spinner,
    status: { type: 'beta' }
  })
  .add(
    'with background',
    () => (
      <Box sx={{ bg: 'background', p: 4 }}>
        <Spinner />
      </Box>
    ),
    {
      component: Spinner,
      status: { type: 'beta' }
    }
  );
