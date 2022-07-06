/**
 * File: /src/components/Flex/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 06-07-2022 07:52:02
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
import Box, { BoxProps } from "../Box";
import { DripsyFC } from "../../dripsyHelper";

export type FlexProps = BoxProps;

const Flex: DripsyFC<FlexProps> = (props: FlexProps) => {
  const sx: SxProp = {
    flexDirection: "row",
    ...Flex.defaultSx,
    ...props.sx,
    display: "flex",
  };
  return <Box {...props} sx={sx} />;
};

Flex.defaultProps = {};

Flex.defaultSx = {};

export default Flex;
