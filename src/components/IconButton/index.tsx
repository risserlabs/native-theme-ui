/**
 * File: /components/IconButton/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:56:38
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
import { SxProp } from 'dripsy';
import {
  PressableProps as RNPressableProps,
  ImageProps as RNImageProps,
  ImageSourcePropType
} from 'react-native';
import Pressable from '../Pressable';
import Image from '../Image';
export interface PressableProps extends RNPressableProps {
  sx?: SxProp;
}
export interface ImageProps extends RNImageProps {
  source: ImageSourcePropType;
  iconSx?: SxProp;
  // tintColor?: string;
}
type Props = PressableProps & ImageProps;
const IconButton: FC<Props> = (props: PressableProps & ImageProps) => {
  const sx: SxProp = {
    ...styles.pressable,
    ...props.sx
  };
  const iconsx: SxProp = {
    ...props.iconSx
  };

  return (
    <Pressable {...props} sx={{ ...sx }} onPress={props.onPress}>
      <Image source={props.source} sx={{ ...iconsx }} />
    </Pressable>
  );
};

IconButton.defaultProps = {
  sx: {},
  iconSx: {}
};

export const styles = {
  pressable: {
    maxWidth: '100%',
    bg: 'primary',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default IconButton;
