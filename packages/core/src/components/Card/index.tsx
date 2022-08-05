/**
 * File: /src/components/Card/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 05-08-2022 01:30:22
 * Modified By: Lavanya Katari
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
import { AutoContrast } from "@risserlabs/auto-contrast";
import { SxProp } from "@dripsy/core";
import { ViewProps as RNViewProps } from "react-native";
import { DripsyFC } from "../../dripsyHelper";
import Box, { BoxProps } from "../Box";
type CardProps = RNViewProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};
const Card: DripsyFC<CardProps> = (props: CardProps) => {
  const sx: SxProp = {
    ...Card.defaultSx,
    ...props.sx,
  };
  return (
    <Box
      themeKey={"cards" as unknown as any}
      variant={"primary" as unknown as any}
      {...props}
      sx={sx}
    >
      {props.children}
    </Box>
  );
};

Card.defaultProps = {
  children: null,
  sx: {},
};

Card.defaultSx = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  // padding: "4px 16px",
  borderRadius: "2%",
};
export default Card;
