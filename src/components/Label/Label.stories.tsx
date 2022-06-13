/**
 * File: /components/Label/Label.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:56:58
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
import Label from '.';
import { storiesOf } from '../../storybook';

storiesOf('Label', module)
  .add('default', () => <Label>Form Label</Label>, {
    component: Label,
    status: { type: 'beta' }
  })
  .add(
    'with background',
    () => (
      <Box sx={{ bg: 'background', p: 4 }}>
        <Label>Form Label</Label>
      </Box>
    ),
    {
      component: Label,
      status: { type: 'beta' }
    }
  );
