/**
 * File: /components/Pressable/Pressable.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 08:49:28
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
import Pressable from ".";
import { storiesOf } from "../../storybook";
import Text from "../Text";
import Box from "../Box";

storiesOf("Pressable", module)
  .add(
    "with text",
    () => (
      <Pressable onPress={action("clicked-text")}>
        <Text>Button text</Text>
      </Pressable>
    ),
    {
      component: Pressable,
      status: { type: "beta" },
    }
  )
  .add(
    "with some emoji",
    () => (
      <Pressable onPress={action("clicked-emoji")}>
        <Text>😀 😎 👍 💯 :)</Text>
      </Pressable>
    ),
    {
      component: Pressable,
      status: { type: "beta" },
    }
  )
  .add(
    "with background",
    () => (
      <Box sx={{ bg: "background", p: 4 }}>
        <Pressable onPress={action("clicked-text")}>
          <Text>Button text</Text>
        </Pressable>
      </Box>
    ),
    {
      component: Text,
      status: { type: "beta" },
    }
  );
