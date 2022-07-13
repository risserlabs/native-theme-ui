/**
 * File: /src/components/Paragraph/Paragraph.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 20-06-2022 05:48:50
 * Author: Clay Risser
 * -----
 * Last Modified: 13-07-2022 00:18:10
 * Modified By: Manikanta
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
  //storiesOf,
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Paragraph from "./index";
import Box from "../Box";

export default {
  title: "components/texts/Paragraph",
  component: Paragraph,
  parameters: {
    status: { type: "beta" },
  },
};

export const paragraph = createArgsStory(Paragraph);
paragraph.args = {
  children: "i am Paragraph",
  autoContrast: Paragraph.defaultProps?.autoContrast,
  ...createSxArgs(Paragraph),
};
paragraph.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

// storiesOf("Paragraph", module)
//   .add("default", createArgsStory(Paragraph), {
//     args: {
//       children: "I am a paragraph",
//       autoContrast: Paragraph.defaultProps?.autoContrast,
//       ...createSxArgs(Paragraph),
//     },
//     argTypes: {
//       autoContrast: {
//         options: ["A", "AA", "AAA", false],
//         control: { type: "select" },
//       },
//       ...sxArgTypes,
//     },
//   })
export const withBackGround = (args: Args) => (
  <Box
    sx={{
      padding: 2,
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
