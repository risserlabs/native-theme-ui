/**
 * File: /components/Text/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 08:49:28
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
import { Text as DText, SxProp } from "dripsy";
import { TextProps as RNTextProps } from "react-native";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC } from "../../dripsyHelper";

export type TextProps = RNTextProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};

const Text: DripsyFC<TextProps> = (props: TextProps) => {
  const sx = useAutoContrast(props, {
    ...Text.defaultSx,
    ...props.sx,
  });
  return <DText {...props} sx={sx}></DText>;
};
Text.defaultProps = {};

Text.defaultSx = {
  fontSize: 2,
  fontWeight: "bold",
};

export default Text;
