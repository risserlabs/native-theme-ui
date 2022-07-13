/**
 * File: /src/components/Avatar/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 12-07-2022 03:53:02
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
import { SxProp, View as DView } from "@dripsy/core";
import { ViewProps as RNViewProps } from "react-native";
// import Text from "../Text";
// import Image from "../Image";
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast } from "@risserlabs/auto-contrast";

export type AvatarProps = RNViewProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  isImage?: boolean;
  name?: string;
  uri?: string;
  src?: string;
};

//export interface ViewProps extends RNViewProps {
//sx?: SxProp;
//isImage?: boolean;
//name?: string;
//uri?: string;
//}

const Avatar: DripsyFC<AvatarProps> = (props: AvatarProps) => {
  const sx: SxProp = {
    ...Avatar.defaultSx,
    ...props.sx,
  };
  return <DView sx={{ ...sx }}>{props.children}</DView>;
};

Avatar.defaultProps = {
  sx: {},
  isImage: false,
  name: "",
  uri: "",
};
Avatar.defaultSx = {
  maxWidth: "100%",
  bg: "primary",
  border: 0,
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  borderRadius: 25,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "primary",
};

export default Avatar;
