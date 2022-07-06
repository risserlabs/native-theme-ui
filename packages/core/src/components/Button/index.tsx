/**
 * File: /src/components/Button/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 07:34:18
 * Author: Clay Risser
 * -----
 * Last Modified: 06-07-2022 08:51:32
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
import { Pressable as DPressable } from "@dripsy/core";
import { BackgroundColorProvider } from "@risserlabs/auto-contrast";
import { DripsyFC, DPressableProps, isText } from "../../dripsyHelper";
import Text from "../Text";
import { ButtonProps, splitProps } from "./props";

const Button: DripsyFC<ButtonProps> = (props: ButtonProps) => {
  const sx = {
    ...Button.defaultSx,
    display: props.hidden ? "none" : "inline-block",
    ...props.sx,
  };
  const { baseProps, baseSx, textProps, textSx } = splitProps(props, sx);
  const children = isText(props.children) ? (
    <Text {...textProps} sx={textSx}>
      {props.children}
    </Text>
  ) : (
    props.children
  );
  return (
    <DPressable {...(baseProps as DPressableProps)} sx={baseSx}>
      <BackgroundColorProvider sx={sx}>{children}</BackgroundColorProvider>
    </DPressable>
  );
};

Button.defaultProps = {};

Button.defaultSx = {
  alignSelf: "flex-start",
  appearance: "none",
  bg: "primary",
  border: 0,
  borderRadius: 4,
  color: "white",
  fontSize: "inherit",
  lineHeight: "inherit",
  px: 3,
  py: 2,
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
};

export default Button;
