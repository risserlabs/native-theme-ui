/**
 * File: /src/components/Input/Input.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 10:04:09
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
import { Box } from "dripsy";
import { action } from "@storybook/addon-actions";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import Input from "./index";

storiesOf("Input", module)
  .add(
    "default",
    createArgsStory(Input, {
      onBlur: action("onBlur"),
      onChange: action("onChange"),
      onFocus: action("onFocus"),
    }),
    {
      args: {
        ...createSxArgs(Input),
      },
      argTypes: {
        ...sxArgTypes,
      },
    }
  )
  .add(
    "like theme-ui",
    () => (
      <Box>
        <Input defaultValue="Hello" />
      </Box>
    ),
    {
      component: Input,
      status: { type: "beta" },
    }
  )
  .add(
    "with background",
    () => (
      <Box sx={{ bg: "background", p: 4 }}>
        <Input />
      </Box>
    ),
    {
      component: Input,
      status: { type: "beta" },
    }
  );
