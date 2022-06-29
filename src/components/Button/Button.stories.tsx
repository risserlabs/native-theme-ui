/**
 * File: /components/Button/Button.stories.tsx
 * Project: -
 * File Created: 17-06-2022 07:34:26
 * Author: Clay Risser
 * -----
 * Last Modified: 29-06-2022 08:09:05
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
  storiesOf,
  sxArgTypes,
} from "../../storybook";
import Button from "./index";
import Text from "../Text";

storiesOf("atoms/Button", module)
  .add(
    "default",
    createArgsStory(Button, {
      onPress: action("I was pressed"),
      onLongPress: action("I was long pressed"),
      onPressIn: action("I was pressed in"),
      onPressOut: action("I was pressed out"),
    }),
    {
      args: {
        children: "Click Me",
        hidden: Button.defaultProps?.hidden,
        autoContrast: Button.defaultProps?.autoContrast,
        disabled: Button.defaultProps?.disabled,
        ...createSxArgs(Button),
      },
      argTypes: {
        hidden: { control: { type: "boolean" } },
        disabled: { control: { type: "boolean" } },
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
        ...sxArgTypes,
      },
    }
  )
  .add("like theme-ui", () => (
    <>
      <Button sx={{ mr: 2 }} onPress={action("beep")}>
        Beep
      </Button>
      <Button variant="secondary" sx={{ mr: 2 }} onPress={action("boop")}>
        Boop
      </Button>
      <Button sx={{ mr: 2 }} hidden>
        Hidden
      </Button>
    </>
  ))
  .add(
    "with autocontrast",
    (args: Args) => (
      <Button sx={{ bg: args.background }}>
        <Text autoContrast={args.autoContrast}>hello</Text>
      </Button>
    ),
    {
      args: { autoContrast: "AAA", background: "black" },
      argTypes: {
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
        background: { control: { type: "color" } },
      },
    }
  );
