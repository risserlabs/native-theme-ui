/**
 * File: /src/components/Switch/Switch.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 18-08-2022 03:59:35
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
import { action } from "@storybook/addon-actions";
import Box from "../Box";
import Switch from ".";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
export default {
  title: "components/Switch",
  component: Switch,
  parameters: {
    status: { type: "beta" },
  },
};
export const RNswitch = createArgsStory(Switch);
(RNswitch.args = {
  children: " I am a Switch ",
  autoContrast: Switch.defaultProps?.autocontrast,
  onChange: action("onChange"),
  onValueChange: action("onValueChange"),
  ...createSxArgs(),
}),
  (RNswitch.sxArgsTypes = {
    hidden: { switch: { type: "boolean" } },
    disabled: { switch: { type: "boolean" } },
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const withBackground = () => (
  <Box sx={{ bg: "background", p: 4 }}>
    <Switch
      trackColor={{ false: "#767577", true: "primary" }}
      ios_backgroundColor="#3e3e3e"
      value={true}
    />
  </Box>
);

export const nSwitch = () => (
  <>
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
    />
    <Switch
      trackColor={{ false: "#767577", true: "primary" }}
      ios_backgroundColor="#3e3e3e"
      thumbColor={"red"}
      value={true}
    />
    <Switch
      trackColor={{ false: "#767577", true: "primary" }}
      ios_backgroundColor="#3e3e3e"
      thumbColor={"primary"}
    />
  </>
);

nSwitch.args = {
  children: "I am NSwitch component",
  defaultChecked: Switch.defaultProps?.autocontrast,
  ...createSxArgs(),
};

nSwitch.argTypes = {
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
  defaultChecked: { control: { type: "boolean" } },
  ...sxArgTypes,
};
