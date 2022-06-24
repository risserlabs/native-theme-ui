/**
 * File: /components/Divider/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 06:49:14
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
import { View, Sx, SxProp } from 'dripsy';
import { DripsyFC, DViewProps } from '../../dripsyHelper';
import { AutoContrast, useAutoContrast } from '@risserlabs/auto-contrast';

type DividerProps = DViewProps & {
  autoContrast?: AutoContrast;
};

const Divider: DripsyFC<DividerProps> = (props: DividerProps) => {
  const mergedSx: SxProp = {
    ...Divider.defaultSx,
    ...props.sx,
    color: (props.sx as Sx)?.bg
  };
  delete mergedSx.bg;
  const sx = useAutoContrast(props, mergedSx);
  (sx as Sx).bg = (sx as Sx).color as string;
  delete (sx as Sx).color;
  return <View sx={sx} />;
};

Divider.defaultProps = {};

Divider.defaultSx = {
  bg: 'gray',
  m: 0,
  height: 1,
  width: '100%',
  my: 2,
  border: 0,
  borderBottom: '1px solid'
};

export default Divider;
