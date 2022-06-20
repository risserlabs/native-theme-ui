/**
 * File: /components/Button/Button.stories.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:26
 * Author: Clay Risser
 * -----
 * Last Modified: 20-06-2022 08:18:44
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
import { storiesOf } from '../../storybook';
import Button from './index';

storiesOf('Button', module)
  .add('default', () => <Button>Click Me</Button>)
  .add('with green color', () => (
    <Button sx={{ bg: 'green' }}>Click Me 456</Button>
  ))
  .add('with blue color', () => (
    <Button sx={{ bg: 'blue' }}>Click Me 789</Button>
  ))
  .add('with onPress', () => (
    <Button sx={{ bg: 'blue' }} onPress={action('I was pressed')}>
      Click Me 789
    </Button>
  ));
