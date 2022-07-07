/**
 * File: /src/components/Flex/Flex.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 06-07-2022 08:18:20
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
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Box from "../Box";
import Flex from "./index";

export default {
  title: "components/Flex",
  component: Flex,
  parameters: {
    status: { type: "beta" },
  },
};

export const flex = createArgsStory(Flex);
flex.args = {
  children: "I am a flex component",
  ...createSxArgs(Flex),
};
flex.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const flexRow = () => (
  <Flex>
    <Box autoContrast="AAA" sx={{ bg: "primary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
    <Box autoContrast="AAA" sx={{ bg: "secondary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
    <Box autoContrast="AAA" sx={{ bg: "primary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
  </Flex>
);

export const flexColumn = () => (
  <Flex sx={{ flexDirection: "column" }}>
    <Box autoContrast="AAA" sx={{ bg: "primary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
    <Box autoContrast="AAA" sx={{ bg: "secondary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
    <Box autoContrast="AAA" sx={{ bg: "primary", p: 4, m: 2 }}>
      Hello, world!
    </Box>
  </Flex>
);

export const likeThemeUi = () => (
  <Flex>
    <Box sx={{ flex: "1 1 auto", p: 2, bg: "primary", color: "white" }}>
      Flex
    </Box>
    <Box sx={{ bg: "muted", p: 2 }}>Box</Box>
  </Flex>
);
