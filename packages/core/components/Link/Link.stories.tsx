/**
 * File: /components/Link/Link.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 22-06-2022 14:34:02
 * Author: Ajithkrm6
 * -----
 * Last Modified: 30-06-2022 08:49:28
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
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  Args,
} from "../../storybook";
import Link from "./index";
import Box from "../Box";

storiesOf("Link", module)
  .add("default", createArgsStory(Link), {
    args: {
      children: "Click Me",
      href: "https://example.com",
      autoContrast: Link.defaultProps?.autoContrast,
      ...createSxArgs(Link),
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
        <Link autoContrast={args.autoContrast} href="https://example.com">
          Click Me
        </Link>
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
