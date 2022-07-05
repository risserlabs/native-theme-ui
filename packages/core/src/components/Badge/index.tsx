/**
 * File: /src/components/Badge/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 10:23:15
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
import { SxProp, View as DView } from "@dripsy/core";
import { ViewProps as RNViewProps } from "react-native";
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";

export type BadgeProps = RNViewProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  variant?: string;
};
//export interface ViewProps extends RNViewProps {

//}

const Badge: DripsyFC<BadgeProps> = (props: BadgeProps) => {
  // const style =
  //props.variant === 'accent'
  //? styles.badge.accent
  // : props.variant === 'outline'
  //? styles.badge.outline
  // : styles.badge.circle;

  const sx = useAutoContrast(props, {
    ...Badge.defaultSx,
    ...props.sx,
  });

  return <DView sx={{ ...sx }}>{props.children}</DView>;
};

Badge.defaultProps = {
  sx: {},
  variant: "accent",
};
Badge.defaultSx = {
  width: 50,
  height: 20,
  display: "flex",
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "70%",
  borderRadius: 2,
  color: "white",
  bg: "primary",
};

export default Badge;
