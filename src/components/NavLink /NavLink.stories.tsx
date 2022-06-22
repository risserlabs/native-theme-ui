/**
 * File: /components/NavLink /NavLink.stories.tsx
 * Project: -
 * File Created: 22-06-2022 14:34:02
 * Author: Ajithkrm6
 * -----
 * Last Modified: 22-06-2022 15:07:34
 * Modified By: Ajithkrm6
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
import NavLink from './index';

storiesOf('NavLink', module).add('with default', () => <NavLink></NavLink>);
