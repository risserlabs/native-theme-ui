/**
 * File: /components/Box/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 22-06-2022 07:52:47
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
import { Box as DBox } from 'dripsy';
import {
  BackgroundColorProvider,
  useAutoContrast,
  AutoContrast
} from '@risserlabs/auto-contrast';
import { DBoxProps, DripsyFC } from '../../dripsyHelper';

export type BoxProps = DBoxProps & {
  autoContrast?: AutoContrast;
};

const Box: DripsyFC<BoxProps> = (props: BoxProps) => {
  const sx = useAutoContrast(props, {
    ...Box.defaultSx,
    ...props.sx
  });
  return (
    <DBox {...props} sx={sx}>
      <BackgroundColorProvider sx={sx}>
        {props.children}
      </BackgroundColorProvider>
    </DBox>
  );
};

Box.defaultProps = {};

Box.defaultSx = {
  boxSizing: 'border-box',
  display: 'inline-block',
  margin: 0,
  minWidth: 0
};

export default Box;
