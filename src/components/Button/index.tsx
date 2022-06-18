/**
 * File: /components/Button/index.tsx
 * Project: -
 * File Created: 17-06-2022 02:19:03
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 18-06-2022 00:52:41
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

import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';
//  import { Pressable as DPressable } from 'react-native';
import { Pressable as DPressable } from 'dripsy';
import { Button as RNButton } from 'react-native';

type ButtonProps = {
  autoContrast?: AutoContrast;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        color: 'white',
        width: 200
      }}
    >
      button
    </div>
  );
};

Button.defaultProps = {};

export default Button;
