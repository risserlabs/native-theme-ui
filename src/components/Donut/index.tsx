/**
 * File: /components/Donut/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:56:17
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
//  import { View, SxProp } from 'dripsy';
import { Box as DBox, SxProp } from 'dripsy';
import { ViewProps } from 'react-native';
export interface DonutProps extends ViewProps {
  sx?: SxProp;
  max?: Number;
  value?: Number;
}

const Donut: FC<DonutProps> = (props: DonutProps) => {
  const size = 128;
  const strokeWidth = 2;
  const value = 0;
  const min = 0;
  const max = 1;
  const r = 16 - strokeWidth;
  const C = 2 * r * Math.PI;
  const offset = C - ((value - min) / (max - min)) * C;

  const sx: SxProp = {
    ...styles.donut,
    ...props.sx
  };

  return (
    <DBox sx={{ ...sx }}>
      {/* <circle cx={16} cy={16} r={r} opacity={1 / 8} />
      <circle
        cx={16}
        cy={16}
        r={r}
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90 16 16)"
      /> */}
    </DBox>
  );
};

Donut.defaultProps = {};

export const styles = {
  donut: {
    border: '3px solid black',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    strokeWidth: 2,
    fill: 'none',
    stroke: 'currentcolor',
    color: 'primary'
  }
};

export default Donut;
