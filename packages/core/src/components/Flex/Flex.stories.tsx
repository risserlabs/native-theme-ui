/**
 * File: /src/components/Flex/Flex.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 10:04:14
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
import { Box, Text } from "dripsy";
import {
  createArgsStory,
  storiesOf,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import Flex from ".";

storiesOf("Flex", module)
  .add("default", createArgsStory(Flex), {
    args: {
      children: "I am Flex ",
      ...createSxArgs,
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: "select",
      },
      ...sxArgTypes,
    },
  })
  .add(
    "flex row",
    () => (
      <Flex>
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>
      </Flex>
    ),
    {
      component: Flex,
      status: { type: "beta" },
    }
  )
  .add(
    "flex column",
    () => (
      <Flex sx={{ flexDirection: "column" }}>
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
        <Box sx={{ bg: "primary", p: 4 }}>
          <Text>Hello, world!</Text>
        </Box>
      </Flex>
    ),
    {
      component: Flex,
      status: { type: "beta" },
    }
  )
  .add(
    "like theme ui",
    () => (
      <Flex>
        <Box sx={{ bg: "primary", p: 2, flex: "1 1 auto" }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
        <Box sx={{ bg: "primary", p: 2 }}>
          <Text>Hello, world!</Text>
        </Box>{" "}
      </Flex>
    ),
    {
      component: Flex,
      status: { type: "beta" },
    }
  );
