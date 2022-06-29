/**
 * File: /components/Box/Box.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 07:02:16
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
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";
import Box from "./index";
import Text from "../Text";

storiesOf("atoms/Box", module)
  .addParameters({
    status: { type: "beta" },
  })
  .add("default", createArgsStory(Box), {
    args: {
      children: "I am a box",
      autoContrast: Box.defaultProps?.autoContrast,
      ...createSxArgs(Box),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: "select",
      },
      ...sxArgTypes,
    },
  })
  .add("like theme-ui", () => (
    <Box
      sx={{
        p: 4,
        color: "white",
        bg: "primary",
      }}
    >
      <Text>Beep</Text>
    </Box>
  ))
  .add("multiple", () => {
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
  });
