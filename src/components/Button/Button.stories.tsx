/**
 * File: /components/Button/Button.stories.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:26
 * Author: Clay Risser
 * -----
 * Last Modified: 17-06-2022 08:04:36
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
import Button from './index';

storiesOf('Button', module)
  .add('with green color', () => <Button sx={{ backgroundColor: 'green' }} />)
  .add('with blue color', () => <Button sx={{ backgroundColor: 'blue' }} />);
