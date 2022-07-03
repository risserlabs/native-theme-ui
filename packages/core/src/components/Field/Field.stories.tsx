/**
 * File: /src/components/Field/Field.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 04:22:36
 * Author: Lavanya Katari
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
import Box from "../Box";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import { View } from "dripsy";
import Input from "./index";
import Text from "../Text";
import Field from ".";

storiesOf("Field", module)
  .add("default", createArgsStory(Field), {
    args: {
      children: "I am a field",
      autoContrast: Field.defaultProps?.autoContrast,
      ...createSxArgs(Field),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: { type: "select" },
      },
      ...sxArgTypes,
    },
  })
  .add("with background", () => (
    <Field sx={{ bg: "secondary" }}>
      <Text>Hello, world</Text>
    </Field>
  ))
  .add("like theme-ui", () => (
    <Box sx={{ p: 4, color: "yellow", bg: "black" }}>
      <Text>Beep</Text>
    </Box>
  ))
  .add("multiple", () => {
    const style = {
      Field: {
        color: "white",
        height: 100,
        width: 300,
        margin: 3,
      },
      Field1: {
        bg: "primary",
      },
      Field2: {
        bg: "secondary",
      },
    };
    return (
      <View sx={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <Field
          sx={{
            ...style.Field,
            ...style.Field1,
          }}
        />
        <Field
          sx={{
            ...style.Field,
            ...style.Field2,
          }}
        />
      </View>
    );
  });
