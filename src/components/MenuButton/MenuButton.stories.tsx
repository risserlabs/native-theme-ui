/**
 * File: /components/MenuButton/MenuButton.stories.tsx
 * Project: -
 * File Created: 19-06-2022 06:50:53
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 20-06-2022 01:46:47
 * Modified By: K S R P BHUSHAN
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
import MenuButton from './index';

storiesOf('MenuButton', module)
  .add('with green color', () => (
    <MenuButton sx={{ backgroundColor: 'green' }} />
  ))
  .add('with blue color', () => (
    <MenuButton sx={{ backgroundColor: 'blue' }} />
  ));
