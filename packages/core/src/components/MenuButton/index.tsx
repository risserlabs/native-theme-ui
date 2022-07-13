/**
 * File: /src/components/MenuButton/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 19-06-2022 06:50:27
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 13-07-2022 05:28:50
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

import React, { FC } from "react";
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
  menuSx?: SxProp;
  // tintColor?: string;
}
type MenuButtonProps = PressableProps & ImageProps;
const MenuButton: DripsyFC<MenuButtonProps> = (
  props: PressableProps & ImageProps
) => {
  const sx: SxProp = {
    ...MenuButton.defaultSx,
    ...props.sx,
  };
  const menusx: SxProp = {
    ...props.menuSx,
  };

  return (
    <Pressable
      themeKey="buttons"
      variant="menu"
      {...props}
      sx={{ ...sx }}
      onPress={props.onPress}
    >
      <Image source={props.source} sx={{ ...menusx }} />
    </Pressable>
  );
};

MenuButton.defaultProps = {
  sx: {},
  menuSx: {},
};

MenuButton.defaultSx = {
  maxWidth: "100%",
  bg: "primary",
  alignItems: "center",
  justifyContent: "center",
};

export default MenuButton;
