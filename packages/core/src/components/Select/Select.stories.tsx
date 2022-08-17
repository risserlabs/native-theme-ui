/**
 * File: /src/components/Select/Select.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 06:16:36
 * Author: Harikittu46
 * -----
 * Last Modified: 17-08-2022 10:43:00
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
import { action } from "@storybook/addon-actions";
import {
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Select from "./index";
import Box from "../Box";
//import Text from "../Text";

export default {
  title: "components/forms/Select",
  component: Select,
  parameters: {
    status: { type: "beta" },
  },
};

export const select = createArgsStory(Select, {}, [
  <Select.Option key="0">BMW</Select.Option>,
  <Select.Option key="1">AUDI</Select.Option>,
  <Select.Option key="2">FORD</Select.Option>,
  <Select.Option key="3">SUZUKI</Select.Option>,
]);

(select.args = {
  autoContrast: Select.defaultProps?.autoContrast,
  ...createSxArgs(),
}),
  (select.argTypes = {
    background: { control: { type: "color" } },
    autoContrast: {
      options: ["A", "AA", "AAA", false],
      control: { type: "select" },
      ...autoContrastArgType,
      ...sxArgTypes,
    },
  });

export const likeThemUi = (args: Args) => (
  <Box
    sx={{
      padding: 2,
      bg: args.background,
    }}
  >
    <Select autoContrast={args.autoContrast}>
      <Select.Option>BMW</Select.Option>
      <Select.Option>AUDI</Select.Option>
      <Select.Option>FORD</Select.Option>
      <Select.Option>SUZUKI</Select.Option>
    </Select>
  </Box>
);

export const withAutocontrast = (args: Args) => (
  <Select sx={{ bg: args.background }}>
    <Select.Option>BMW</Select.Option>
    <Select.Option>AUDI</Select.Option>
    <Select.Option>FORD</Select.Option>
    <Select.Option>SUZUKI</Select.Option>
  </Select>
);

(withAutocontrast.args = {
  background: "red",
  autoContrast: "AAA",
}),
  (withAutocontrast.argTypes = {
    ...autoContrastArgType,

    background: { control: { type: "color" } },
    autoContrast: {
      options: ["A", "AA", "AAA", false],
      control: { type: "select" },
    },
  });
