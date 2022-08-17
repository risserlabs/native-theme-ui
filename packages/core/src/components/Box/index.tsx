/**
 * File: /src/components/Box/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 07:55:25
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

import React, { ComponentProps } from "react";
import { BackgroundColorProvider } from "@risserlabs/auto-contrast";
import { View as RNView, Pressable as RNPressable } from "react-native";
import { createThemedComponent, Sx } from "dripsy";
import Text from "../Text";
import { BoxProps, splitProps, pressablePropKeys } from "./props";
import { DripsyFC, isText } from "../../dripsyHelper";

const defaultStyle: Sx = {
  boxSizing: "border-box",
  cursor: "auto",
  display: "flex",
  flexDirection: "row",
  margin: 0,
  minWidth: 0,
};

const ThemedView = createThemedComponent(RNView, {
  defaultStyle,
  themeKey: "variants",
});

const ThemedPressable = createThemedComponent(RNPressable, {
  defaultStyle,
  themeKey: "variants",
});

export type ThemedViewProps = ComponentProps<typeof ThemedView>;

export type ThemedPressableProps = ComponentProps<typeof ThemedPressable>;

const pressablePropKeysSet = new Set(pressablePropKeys);

const Box: DripsyFC<BoxProps> = (props: BoxProps) => {
  const sx = {
    ...Box.defaultSx,
    ...props.sx,
  };
  const { baseProps, baseSx, textProps, pressableSx, textSx, pressableProps } =
    splitProps(props, sx);

  const children = isText(props.children) ? (
    <Text {...textProps} sx={textSx}>
      {props.children}
    </Text>
  ) : (
    props.children
  );

  const isPressable = (() => {
    const propKeys = Object.keys(props);
    for (let i = 0; i < propKeys.length; i++) {
      const propKey = propKeys[i];
      if (pressablePropKeysSet.has(propKey)) return true;
    }
    return false;
  })();

  const renderBase = () => (
    <ThemedView
      {...(baseProps as ThemedViewProps)}
      {...(isPressable ? {} : (pressableProps as Partial<ThemedViewProps>))}
      sx={{
        ...baseSx,
        ...(isPressable ? {} : pressableSx),
      }}
    >
      <BackgroundColorProvider sx={sx}>{children}</BackgroundColorProvider>
    </ThemedView>
  );

  return isPressable ? (
    <ThemedPressable {...pressableProps} sx={pressableSx}>
      {renderBase()}
    </ThemedPressable>
  ) : (
    renderBase()
  );
};

Box.defaultProps = {};

Box.defaultSx = {};

export type { BoxProps };

export default Box;
