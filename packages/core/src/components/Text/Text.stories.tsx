/**
 * File: /src/components/Text/Text.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 09:08:44
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
import Box from "../Box";
import Text from "./index";
import {
  Args,
  autoContrastArgType,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";

export default {
  title: "components/Text",
  component: Text,
  parameters: {
    status: { type: "beta" },
  },
};

export const text = createArgsStory(Text);
text.args = {
  children: "I am some text",
  autoContrast: Text.defaultProps?.autoContrast,
  ...createSxArgs(Text),
};
text.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const withBackground = (args: Args) => (
  <Box
    sx={{
      bg: args.background,
      p: 4,
      fontWeight: "bold",
    }}
  >
    <Text>Hello, world!</Text>
  </Box>
);
withBackground.args = {
  background: "background",
  autoContrast: "AAA",
};
withBackground.argTypes = {
  background: { control: { type: "color" } },
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
};
