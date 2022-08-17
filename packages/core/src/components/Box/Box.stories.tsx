/**
 * File: /src/components/Box/Box.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 10:43:00
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
import { View } from "dripsy";
import Box from "./index";
import Text from "../Text";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Box",
  component: Box,
  parameters: {
    status: { type: "beta" },
  },
};

export const box = createArgsStory(Box, {
  onPress: action("onPress"),
});
box.args = {
  children: "I am a box",
  autoContrast: Box.defaultProps?.autoContrast,
  ...createSxArgs(),
};
box.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const likeThemeUi = () => (
  <Box
    sx={{
      p: 4,
      color: "white",
      bg: "primary",
    }}
  >
    <Text>Beep</Text>
  </Box>
);

export const multiple = () => {
  const style = {
    box: {
      color: "white",
      height: 200,
      width: 200,
      margin: 4,
    },
    box1: {
      bg: "primary",
    },
    box2: {
      bg: "secondary",
    },
  };
  return (
    <View sx={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <Box
        sx={{
          ...style.box,
          ...style.box1,
        }}
      />
      <Box
        sx={{
          ...style.box,
          ...style.box2,
        }}
      />
      <Box
        sx={{
          ...style.box,
          ...style.box1,
        }}
      />
      <Box
        sx={{
          ...style.box,
          ...style.box2,
        }}
      />
    </View>
  );
};
