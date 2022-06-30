/**
 * File: /src/components/Progress/Progress.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 10:04:03
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
import Progress from "./index";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  createSxArgTypes,
  Args,
} from "../../../storybook";

storiesOf("Progress", module)
  .add("default", createArgsStory(Progress), {
    args: {
      value: Progress.defaultProps?.value,
      max: Progress.defaultProps?.max,
      ...createSxArgs(Progress, ["sxP"]),
    },
    argTypes: {
      value: { control: { type: "number" } },
      max: { control: { type: "number" } },
      ...createSxArgTypes(["sxP"]),
    },
  })
  .add(
    "with background",
    (args: Args) => (
      <Box sx={{ bg: args.background, p: 4, width: "100%" }}>
        <Progress max={args.max} value={args.value} />
      </Box>
    ),
    {
      args: {
        background: "background",
        value: 50,
        max: 100,
      },
      argTypes: {
        background: { control: { type: "color" } },
        value: { control: { type: "number" } },
        max: { control: { type: "number" } },
      },
    }
  );
