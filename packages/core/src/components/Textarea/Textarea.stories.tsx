/**
 * File: /src/components/Textarea/Textarea.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 10:03:58
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
import Textarea from ".";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";

storiesOf("Textarea", module)
  //.add('full width', () => <Textarea />, {
  //component: Textarea,
  //status: { type: 'beta' }
  //})

  .add("default", createArgsStory(Textarea), {
    args: {
      children: "Textarea",
      ...createSxArgs(Textarea),
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
    "with placeholder",
    () => (
      <Textarea
        placeholderTextColor="primary"
        placeholder="hello"
        sx={{ borderColor: "blue", maxWidth: 200 }}
      />
    ),
    {
      component: Textarea,
      status: { type: "beta" },
    }
  )
  .add(
    "like theme-ui",
    () => (
      <Box>
        <Textarea defaultValue="Hello" />
      </Box>
    ),
    {
      component: Textarea,
      status: { type: "beta" },
    }
  )
  .add(
    "with background",
    () => (
      <Box sx={{ bg: "background", p: 4 }}>
        <Textarea />
      </Box>
    ),
    {
      component: Textarea,
      status: { type: "beta" },
    }
  );
