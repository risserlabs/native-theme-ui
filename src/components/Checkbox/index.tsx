/**
 * File: /components/Checkbox/index.tsx
 * Project: -
 * File Created: 17-06-2022 01:05:11
 * Author: Lavanya Katari
 * -----
 * Last Modified: 18-06-2022 01:17:30
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

import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';

type CheckBoxProps = {
  autocontrast?: AutoContrast;
};
const CheckBox: FC<CheckBoxProps> = (Props: CheckBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: 'purple',
        padding: 40,
        borderRadius: 15,
        color: 'white',
        width: 1200
      }}
    >
      CheckBox
    </div>
  );
};

CheckBox.defaultProps = {};

export default CheckBox;
