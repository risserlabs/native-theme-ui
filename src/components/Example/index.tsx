/**
 * File: /components/Example/index.tsx
 * Project: -
 * File Created: 14-06-2022 07:29:28
 * Author: Clay Risser
 * -----
 * Last Modified: 14-06-2022 08:01:37
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
import { Box as DBox, Pressable as DPressable } from 'dripsy';
import { useAutoContrast } from '@risserlabs/auto-contrast';
import {
  PressableProps as DPressableProps,
  BoxProps as DBoxProps
} from '../../dripsyProps';

type ExampleProps = DPressableProps &
  DBoxProps & {
    autoContrast?: 'A' | 'AA' | 'AAA' | true;
  };

const Example: FC<ExampleProps> = (props: ExampleProps) => {
  const sx = useAutoContrast(props, { ...props.sx, ...styles.dbox });
  return (
    <DPressable onPress={props.onPress}>
      <DBox {...props} sx={sx} />
    </DPressable>
  );
};

Example.defaultProps = {
  sx: {},
  autoContrast: 'AAA'
};

export const styles = {
  dbox: {
    // boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  }
};

export default Example;
