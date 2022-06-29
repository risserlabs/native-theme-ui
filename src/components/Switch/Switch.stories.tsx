/**
 * File: /components/Switch/Switch.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 05:40:21
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
import { action } from "@storybook/addon-actions";
import Box from "../Box";
import Switch from ".";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";

storiesOf("Switch", module)
  .add(
    "default",
    createArgsStory(Switch, {
      onChange: action("onChange"),
      onValueChange: action("onValueChange"),
    }),
    {
      args: {
        children: "Iam switch component",
        defaultChecked: Switch.defaultProps?.defaultChecked,
        ...createSxArgs(Switch),
      },
      argTypes: {
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
        defaultChecked: { control: { type: "boolean" } },
        ...sxArgTypes,
      },
    }
  )
  .add(
    "default",
    () => (
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
    ),
    {
      component: Switch,
      status: { type: "beta" },
    }
  )
  .add(
    "with background",
    () => (
      <Box sx={{ bg: "background", p: 4 }}>
        <Switch
          trackColor={{ false: "#767577", true: "primary" }}
          ios_backgroundColor="#3e3e3e"
          value={true}
        />
      </Box>
    ),
    {
      component: Switch,
      status: { type: "beta" },
    }
  );
