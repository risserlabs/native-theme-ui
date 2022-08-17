/**
 * File: /src/components/Paragraph/Paragraph.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 20-06-2022 05:48:50
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
import {
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Paragraph from "./index";
import Box from "../Box";
import Text from "../Text";
export default {
  title: "components/text/Paragraph",
  component: Paragraph,
  parameters: {
    status: { type: "beta" },
  },
};

export const paragraph = createArgsStory(Paragraph);

paragraph.args = {
  children: "I am Paragraph",

  autoContrast: Paragraph.defaultProps?.autoContrast,
  ...createSxArgs(),
};
paragraph.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const withBackGround = (args: Args) => (
  <Box
    sx={{
      padding: 30,

      bg: args.background,
    }}
  >
    <Paragraph autoContrast={args.autoContrast}>I am a paragraph</Paragraph>
  </Box>
);
//   // {
//   //   args: {
//   //     background: "black",
//   //     autoContrast: "AAA",
//   //   },
//   //   argTypes: {
//   //     background: { control: { type: "color" } },
//   //     autoContrast: {
//   //       options: ["A", "AA", "AAA", false],
//   //       control: { type: "select" },
//   //     },
//   //   },
//   // }
// );
