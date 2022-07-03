/**
 * File: /src/components/Heading/Heading.stories.tsx
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
import { View } from "dripsy";
import Box from "../Box";
import Heading from "./index";
import {
  storiesOf,
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";

storiesOf("Heading", module)
  //  .add(
  //   'variants',
  //    () => (
  // <Box>
  //   <Heading as="h1" sx={{ color: 'primary', lineHeight: 30 }}>
  // h1
  // </Heading>
  // <Heading as="h2" sx={{ color: 'primary', lineHeight: 30 }}>
  //  h2
  // </Heading>
  // <Heading as="h3" sx={{ color: 'primary', lineHeight: 27 }}>
  // h3
  // </Heading>
  // <Heading as="h4" sx={{ color: 'primary', lineHeight: 25 }}>
  // h4
  // </Heading>
  // <Heading as="h5" sx={{ color: 'primary', lineHeight: 20 }}>
  // h5
  // </Heading>
  // <Heading as="h6" sx={{ color: 'primary', lineHeight: 20 }}>
  // h6
  // </Heading>
  // </Box>
  // ),
  // {
  //  component: Heading,
  //  status: { type: 'beta' }
  // }
  // )
  .add("default", createArgsStory(Heading), {
    args: {
      children: "Heading",
      ...createSxArgs(Heading),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", "false"],
        control: { type: "select" },
      },
      ...sxArgTypes,
    },
  })
  .add(
    "with background",
    () => (
      <Box sx={{ bg: "background", p: 4 }}>
        <Heading>Hello Heading!</Heading>
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
          control: { type: "select" },
        },
      },
    }
  );
