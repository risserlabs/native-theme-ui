/**
 * File: /src/components/IconButton/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 14-07-2022 07:05:10
 * Modified By: Manikanta
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

import React from "react";
import { SxProp } from "@dripsy/core";
import {
  PressableProps as RNPressableProps,
  ImageProps as RNImageProps,
  ImageSourcePropType,
} from "react-native";
import Pressable from "../Pressable";
import Image from "../Image";
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast } from "@risserlabs/auto-contrast";
export interface PressableProps extends RNPressableProps {
  sx?: SxProp;
}
export interface ImageProps extends RNImageProps {
  autoContrast?: AutoContrast;
  source: ImageSourcePropType;
  iconSx?: SxProp;
  //tintColor?: string;
}
type IconButtonProps = PressableProps & ImageProps;
const IconButton: DripsyFC<IconButtonProps> = (
  props: PressableProps & ImageProps
) => {
  const sx: SxProp = {
    ...IconButton.defaultSx,
    ...props.sx,
  };
  const iconsx: SxProp = {
    ...props.iconSx,
  };

  return (
    <Pressable
      themeKey="buttons"
      variant="icon"
      {...props}
      sx={{ ...sx }}
      onPress={props.onPress}
    >
      <Image source={props.source} sx={{ ...iconsx }} />
    </Pressable>
  );
};

IconButton.defaultProps = {
  sx: {},
  iconSx: {},
};

IconButton.defaultSx = {
  maxWidth: "100%",
  bg: "primary",
  alignItems: "center",
  justifyContent: "center",
};

export default IconButton;
