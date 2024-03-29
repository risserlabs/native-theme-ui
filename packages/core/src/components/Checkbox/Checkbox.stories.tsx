/**
 * File: /src/components/Checkbox/Checkbox.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 15-06-2022 06:37:48
 * Author: Lavanya Katari
 * -----
 * Last Modified: 18-08-2022 03:40:11
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
import Box from "../Box";
import { action } from "@storybook/addon-actions";
import {
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import CheckBox from "./index";
export default {
  title: "components/forms/CheckBox",
  component: CheckBox,
  parameters: {
    status: { type: "beta" },
  },
};
export const Checkbox = createArgsStory(CheckBox, {
  onChange: action("onChange"),
  onValueChange: action("onValueChange"),
});
Checkbox.args = {
  children: " I am CheckBox",
  autoContrast: CheckBox.defaultProps?.autoContrast,
  ...createSxArgs(),
};
Checkbox.argTypes = {
  hidden: { control: { type: "boolean" } },
  disabled: { control: { type: "boolean" } },
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const withBackground = (args: Args) => (
  <Box
    sx={{
      padding: 2,
      bg: args.background,
    }}
  >
    <CheckBox autoContrast={args.autoContrast}>I am a paragraph</CheckBox>
  </Box>
);
