/**
 * File: /components/Progress/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 23-06-2022 07:44:23
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
import { View, SxProp } from 'dripsy';
import { ViewProps } from 'react-native';

export type ProgressProps = {
  sx?: SxProp;
  max?: number;
  value?: number;
};

const Progress: FC<ProgressProps> = (props: ProgressProps) => {
  let max: any = props.max;
  let factor = max / 100;
  max = max / factor;
  let value: any = props.value;
  value = value / factor;

  const sxMax: SxProp = {
    ...styles.progress,
    ...props.sx,
    bg: 'gray',
    width: props.value ? `${max}%` : '100%'
  };

  const sxValue: SxProp = {
    ...styles.progress,
    ...props.sx,
    position: 'fixed',
    bg: 'primary',
    width: props.value ? `${value}%` : '100%'
  };

  return (
    <View>
      <View sx={{ ...sxMax }} />
      <View sx={{ ...sxValue }} />
    </View>
  );
};

Progress.defaultProps = {};

export const styles = {
  progress: {
    display: 'block',
    height: '5px',
    margin: 0,
    marginRight: '20px',
    padding: 0,
    overflow: 'hidden',
    color: 'primary',
    borderRadius: 9999,
    border: 'none',
    '&::-webkit-progress-bar': {
      bg: 'transparent'
    },
    '&::-webkit-progress-value': {
      bg: 'currentcolor'
    },
    '&::-moz-progress-bar': {
      bg: 'currentcolor'
    }
  }
};

export default Progress;
