/**
 * File: /components/Close/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 11:09:20
 * Modified By: Ajithkrm6
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
import { SxProp } from 'dripsy';
import { DripsyFC } from '../../dripsyHelper';
import Pressable from '../Pressable';
import { PressableProps as RNPressableProps } from 'react-native';

const x = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentcolor"
    viewBox="0 0 24 24"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export interface CloseProps extends RNPressableProps {
  sx?: SxProp;
}

const Close: DripsyFC<CloseProps> = (props: CloseProps) => {
  const sx: SxProp = {
    ...styles.close,
    ...props.sx
  };

  //todo: replace Pressable with Icon button (Icon button wrapping is not done yet)

  return (
    <Pressable {...props} sx={sx}>
      {x}
    </Pressable>
  );
};

Close.defaultProps = {
  sx: {}
};

Close.defaultSx = {
  // close: { bg: 'transparent' }
};

export default Close;
