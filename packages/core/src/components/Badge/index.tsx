/**
 * File: /src/components/Badge/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 07:56:33
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

import React, { FC } from "react";
import { SxProp } from "dripsy";
import { ViewProps as RNViewProps } from "react-native";
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import Box from "../Box";

export type BadgeProps = RNViewProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  variant?: string;
};
//export interface ViewProps extends RNViewProps {

//}

const Badge: FC<BadgeProps> = (props: BadgeProps) => {
  // const style =
  //props.variant === 'accent'
  //? styles.badge.accent
  // : props.variant === 'outline'
  //? styles.badge.outline
  // : styles.badge.circle;

  const sx = useAutoContrast(props, {
    ...props.sx,
  });

  return (
    <Box themeKey="badges" variant="primary" sx={{ ...sx }}>
      {props.children}
    </Box>
  );
};

Badge.defaultProps = {
  sx: {},
  variant: "accent",
};
const defaultSx = {
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
