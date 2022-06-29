/**
 * File: /components/Paragraph/Paragraph.stories.tsx
 * Project: -
 * File Created: 20-06-2022 05:48:50
 * Author: Clay Risser
 * -----
 * Last Modified: 22-06-2022 08:02:39
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
  storiesOf,
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";
import Paragraph from "./index";
import Box from "../Box";

storiesOf("Paragraph", module)
  .add("default", createArgsStory(Paragraph), {
    args: {
      children: "I am a paragraph",
      autoContrast: Paragraph.defaultProps?.autoContrast,
      ...createSxArgs(Paragraph),
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
    "with background",
    (args: Args) => (
      <Box
        sx={{
          padding: 2,
          bg: args.background,
        }}
      >
        <Paragraph autoContrast={args.autoContrast}>I am a paragraph</Paragraph>
      </Box>
    ),
    {
      args: {
        background: "black",
        autoContrast: "AAA",
      },
      argTypes: {
        background: { control: { type: "color" } },
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
      },
    }
  );
