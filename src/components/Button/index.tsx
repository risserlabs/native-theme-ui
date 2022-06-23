/**
 * File: /components/Button/index.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:18
 * Author: Clay Risser
 * -----
 * Last Modified: 23-06-2022 05:44:07
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

import React, { ReactNode } from 'react';
import { Pressable as DPressable } from 'dripsy';
import {
  AutoContrast,
  useAutoContrast,
  BackgroundColorProvider
} from '@risserlabs/auto-contrast';
import { DripsyFC, DPressableProps } from '../../dripsyHelper';

type ButtonProps = DPressableProps & {
  autoContrast?: AutoContrast;
  children?: ReactNode;
  hidden?: boolean;
};

const Button: DripsyFC<ButtonProps> = (props: ButtonProps) => {
  const sx = useAutoContrast(props, {
    ...Button.defaultSx,
    display: props.hidden ? 'none' : 'inline-block',
    ...props.sx
  });
  return (
    <DPressable {...props} sx={sx}>
      <BackgroundColorProvider sx={sx}>
        {props.children}
      </BackgroundColorProvider>
    </DPressable>
  );
};

Button.defaultProps = {};

Button.defaultSx = {
  appearance: 'none',
  bg: 'primary',
  border: 0,
  borderRadius: 4,
  color: 'white',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  px: 3,
  py: 2,
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none'
};

export default Button;
