/**
 * File: /src/components/Variant/Variant.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 23:52:56
 * Author: Lavanya Katari
 * -----
 * Last Modified: 06-07-2022 04:47:47
 * Modified By: Lavanya Katari
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
  Args,
  autoContrastArgType,
  createArgsStory,
  sxArgTypes,
} from "../../../storybook";
import Variant from ".";
export default {
  title: "components/Variants",
  component: Variant,
  parameters: {
    status: { type: "beta" },
  },
};
export const variant = createArgsStory(Variant);
variant.args = {
  children: " I am Variant",
  autoContrast: Variant.defaultProps?.autoContrast,
};
variant.argTypes = {
  hidden: { control: { type: "boolean" } },
  disabled: { control: { type: "boolean" } },
  ...autoContrastArgType,
  ...sxArgTypes,
};
export const withBackground = (args: Args) => (
  <Box
    sx={{
      bg: args.background,
      p: 4,
    }}
  ></Box>
);
variant.argTypes = {
  background: { control: { type: "color" } },
  ...autoContrastArgType,
};

//storiesOf("Variant", module)
//  .add("default", createArgsStory(Variant), {
//    args: {
//      children: " I Am a Variant",
//      ...createSxArgs(Variant),
//    },
//    argTypes: {
//      autoContrast: {
//        options: ["A", "AA", "AAA", false],
//        controls: "select",
//      },
//      ...sxArgTypes,
//    },
//  })
//  .add(
//    "with background",
//    (args: Args) => (
//      <Box
//        sx={{
//          bg: args.background,
//          p: 4,
//        }}
//      ></Box>
//    ),
//    {
//      argTypes: {
//        background: { control: { type: "color" } },
//        autoContrast: {
//          options: ["A", "AA", "AAA", false],
//          control: { type: "select" },
//        },
//      },
//    }
//  );
