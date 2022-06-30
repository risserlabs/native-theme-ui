/**
 * File: /components/Grid/Grid.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 10:04:09
 * Author: Ajithkrm6
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
import Grid from "./index";
import Box from "../Box";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";

storiesOf("Grid", module)
  .add("default", createArgsStory(Grid, {}), {
    args: {
      children: "I am a Grid",
      ...createSxArgs,
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
    "like theme Ui",
    () => (
      <Grid>
        <Box sx={{ bg: "primary" }}>Box1</Box>
        <Box sx={{ bg: "secondary" }}>Box2</Box>
        <Box sx={{ bg: "muted" }}>Box3</Box>
      </Grid>
    ),
    createArgsStory(Grid)
  );
