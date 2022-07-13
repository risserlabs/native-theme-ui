/**
 * File: /src/components/Alert/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-07-2022 05:16:37
 * Modified By: Ajith Kumar
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
import { createThemedComponent } from "@dripsy/core";
import { useAutoContrast } from "@risserlabs/auto-contrast";
import Box, { BoxProps } from "../Box";
import { DripsyFC, PatchStyledProps } from "../../dripsyHelper";

export type AlertProps = BoxProps;

// const StyledBox = createThemedComponent(Box, {
//   themeKey: "alerts",
//   defaultVariant: "primary",
// });

const Alert: DripsyFC<AlertProps> = (props: AlertProps) => {
  const sx = useAutoContrast(props, {
    ...Alert.defaultSx,
    ...props.sx,
  });

  return (
    <Box
      themeKey="alerts"
      variant="primary"
      {...(props as PatchStyledProps<BoxProps>)}
      sx={sx}
    />
  );
};

Alert.defaultProps = {};

Alert.defaultSx = {
  alignItems: "center",
  bg: "primary",
  borderRadius: 4,
  color: "white",
  display: "flex",
  flexDirection: "row",
  fontWeight: "bold",
  justifyContent: "space-between",
  px: 3,
  py: 2,
};

export default Alert;
