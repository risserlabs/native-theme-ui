/**
 * File: /components/Divider/Divider.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 06:42:24
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
import Divider from ".";
import {
  storiesOf,
  createArgsStory,
  Args,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";

storiesOf("Divider", module)
  .add("default", createArgsStory(Divider), {
    args: {
      autoContrast: Divider.defaultProps?.autoContrast,
      ...createSxArgs(Divider),
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
      <Box sx={{ bg: args.background, p: 4, width: "100%" }}>
        <Divider autoContrast={args.autoContrast} />
      </Box>
    ),
    {
      args: {
        background: "background",
        autoContrast: "AAA",
      },
      argTypes: {
        background: { control: "color" },
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
      },
    }
  );
