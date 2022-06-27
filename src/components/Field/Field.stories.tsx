/**
 * File: /components/Field/Field.stories.tsx
 * Project: -
 * File Created: 27-06-2022 04:22:36
 * Author: Lavanya Katari
 * -----
 * Last Modified: 27-06-2022 04:41:59
 * Modified By: Lavanya Katari
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

import React { FC } from 'react'
import { storiesOf } from '../../storybook'
import Field from './index'
storiesOf ('Field',module)
.add('with background', () => <Field></Field>);

