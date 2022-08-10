/**
 * File: /src/components/Close/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 10-08-2022 06:33:25
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

import React from "react";
import { SxProp } from "@dripsy/core";
import { PressableProps as RNPressableProps } from "react-native";
import { AutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC } from "../../dripsyHelper";
import Button from "../Button";

export type CloseProps = RNPressableProps & {
  sx?: SxProp;
  autoContrast?: AutoContrast;
};
//export interface CloseProps extends RNPressableProps {
//sx?: SxProp;
//}

const Close: DripsyFC<CloseProps> = (props: CloseProps) => {
  const sx: SxProp = {
    ...Close.defaultSx,
    ...props.sx,
  };

  //todo: replace Pressable with Icon button (Icon button wrapping is not done yet)

  return <Button variant="close" {...props} sx={sx} />;
};

Close.defaultProps = {
  sx: {},
};

Close.defaultSx = {
  bg: "transparent",
};

//export const styles = {
//close: { bg: 'transparent' }
//};

export default Close;
