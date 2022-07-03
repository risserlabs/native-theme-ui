/**
 * File: /src/components/Badge/Badge.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 07:02:17
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
import {
  storiesOf,
  createSxArgs,
  createArgsStory,
  sxArgTypes,
} from "../../../storybook";
import Badge from ".";

storiesOf("Badge", module)
  .add("default", createArgsStory(Badge), {
    args: {
      children: "Badge",
      autoContrast: Badge.defaultProps?.autoContrast,
      ...createSxArgs(Badge),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: { type: "select" },
      },
      ...sxArgTypes,
    },
  })
  .add("Accent Badge", () => (
    <Box>
      <Badge variant="accent" sx={{ padding: "70", borderRadius: 100 }}>
        This is a badge
      </Badge>
    </Box>
  ))
  .add("Outline Badge", () => <Badge variant="outline">Badge</Badge>, {
    component: Badge,
  })
  .add(
    "Circle Badge",
    () => (
      <Badge
        variant="circle"
        sx={{ borderRadius: 9999, height: 40, width: 50 }}
      >
        16
      </Badge>
    ),
    {
      component: Badge,
    }
  );
