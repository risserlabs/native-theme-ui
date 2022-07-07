/**
 * File: /src/components/Pressable/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 06-07-2022 08:54:35
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

import React, { FC, ReactNode } from "react";
import { BackgroundColorProvider } from "@risserlabs/auto-contrast";
import { Pressable as DPressable, SxProp } from "@dripsy/core";
import { PressableProps as RNPressableProps } from "react-native";
import Text from "../Text";
import { isText } from "../../dripsyHelper";

export interface PressableProps extends RNPressableProps {
  hidden?: boolean;
  sx?: SxProp;
}

const Pressable: FC<PressableProps> = (props: PressableProps) => {
  const sx: SxProp = {
    display: props.hidden ? undefined : "inline-block",
    ...styles.pressable,
    ...props.sx,
  };
  const children = isText(props.children) ? (
    <Text>{props.children}</Text>
  ) : (
    props.children
  );
  return (
    <DPressable {...props} sx={sx}>
      <BackgroundColorProvider sx={sx}>{children}</BackgroundColorProvider>
    </DPressable>
  );
};

Pressable.defaultProps = {
  children: null,
  sx: {},
};

export const styles = {
  pressable: {
    // appearance: 'none',
    bg: "primary",
    border: 0,
    borderRadius: 4,
    color: "white",
    fontSize: "inherit",
    lineHeight: "inherit",
    px: 3,
    py: 2,
    // textAlign: 'center',
    // textDecoration: 'none'
  },
};

export default Pressable;
