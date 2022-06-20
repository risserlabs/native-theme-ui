/**
 * File: /components/Button/index.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:18
 * Author: Clay Risser
 * -----
 * Last Modified: 20-06-2022 08:17:45
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

import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';
// import { Pressable as RNPressable } from 'react-native';
import { Pressable as DPressable, SxProp } from 'dripsy';
import { PressableProps as DPressableProps } from '../../dripsyProps';

type ButtonProps = DPressableProps & {
  autoContrast?: AutoContrast;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const sx: SxProp = {
    ...styles.dPressable,
    ...props.sx
  };
  return (
    <DPressable {...props} sx={sx}>
      {props.children}
    </DPressable>
  );
};

Button.defaultProps = {};

export const styles = {
  dPressable: {}
};

export default Button;
