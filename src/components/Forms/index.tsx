/**
 * File: /components/Forms/index.tsx
 * Project: -
 * File Created: 21-06-2022 02:17:32
 * Author: Harikittu46
 * -----
 * Last Modified: 23-06-2022 04:43:38
 * Modified By: Hari Krishna
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

import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';
import { SxProp } from 'dripsy';

type FormProps = {
  autoContrast?: AutoContrast;
};
const Forms: FC<FormProps> = (props: FormProps) => {
  return <div>Form component</div>;
};

Forms.defaultProps = {};

export default Forms;
