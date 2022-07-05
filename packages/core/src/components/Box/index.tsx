/**
 * File: /src/components/Box/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 05-07-2022 07:42:26
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
import { Box as DBox } from "@dripsy/core";
import { BackgroundColorProvider } from "@risserlabs/auto-contrast";
import Text from "../Text";
import { BoxProps, splitProps } from "./props";
import { DBoxProps, DripsyFC } from "../../dripsyHelper";

const Box: DripsyFC<BoxProps> = (props: BoxProps) => {
  const sx = {
    ...Box.defaultSx,
    ...props.sx,
  };
  const { baseProps, baseSx, textProps, textSx } = splitProps(props, sx);
  const children =
    typeof props.children === "string" ? (
      <Text {...textProps} sx={textSx}>
        {props.children}
      </Text>
    ) : (
      props.children
    );
  return (
    <DBox {...(baseProps as DBoxProps)} sx={baseSx}>
      <BackgroundColorProvider sx={sx}>{children}</BackgroundColorProvider>
    </DBox>
  );
};

Box.defaultProps = {};

Box.defaultSx = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  margin: 0,
  minWidth: 0,
  width: "100%",
};

export type { BoxProps };

export default Box;
