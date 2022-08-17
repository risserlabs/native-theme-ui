/**
 * File: /src/components/Button/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 07:34:18
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 06:54:27
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

import React, {
  ComponentPropsWithRef,
  forwardRef,
  ComponentProps,
} from "react";
import { BackgroundColorProvider } from "@risserlabs/auto-contrast";
import { Platform, Pressable as RNPressable } from "react-native";
import { styled } from "dripsy";
import Text from "../Text";
import { ButtonProps, splitProps } from "./props";
import { isText } from "../../dripsyHelper";

const StyledPressable = styled(RNPressable, {
  themeKey: "buttons",
  defaultVariant: "primary",
})(({ showCursor }: { showCursor: boolean }) => ({
  ...Platform.select({
    web: {
      cursor: showCursor ? "pointer" : "default",
    },
  }),
  ...{
    alignSelf: "flex-start",
    appearance: "none",
    bg: "primary",
    border: 0,
    borderRadius: 4,
    color: "white",
    px: 3,
    py: 2,
    textAlign: "center",
    userSelect: "none",
  },
}));

export type StyledPressableProps = Omit<
  ComponentProps<typeof StyledPressable>,
  "showCursor"
>;

const Button = forwardRef(function Button(
  props: ButtonProps,
  ref?: ComponentPropsWithRef<typeof RNPressable>["ref"]
) {
  const sx = {
    display: props.hidden ? "none" : "flex",
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
    <StyledPressable
      {...(baseProps as StyledPressableProps)}
      showCursor={
        !!(
          props.onPress ||
          props.accessibilityRole === "link" ||
          !props.disabled
        )
      }
      sx={baseSx}
      ref={ref}
    >
      <BackgroundColorProvider sx={sx}>{children}</BackgroundColorProvider>
    </StyledPressable>
  );
});

Button.defaultProps = {};

export type { ButtonProps };

export default Button;
