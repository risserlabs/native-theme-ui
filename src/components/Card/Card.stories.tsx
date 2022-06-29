/**
 * File: /components/Card/Card.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 29-06-2022 06:00:53
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
import Card from "./index";
import Box from "../Box";
import {
  storiesOf,
  Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";

storiesOf("Card", module)
  .add("default", createArgsStory(Card), {
    args: {
      children: "i am a card",
      ...createSxArgs(Card),
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
    "simple card",
    () => (
      <Card
        sx={{
          height: 300,
          width: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Simple Card
      </Card>
    ),
    {
      component: Card,
      status: { type: "beta" },
    }
  )
  .add(
    "with background",

    (args: Args) => (
      <Box
        sx={{
          padding: 2,
          bg: args.background,
        }}
      >
        <Card autoContrast={args.autoContrast}>I am a Card</Card>
      </Box>
    ),
    {
      args: {
        background: "Purple",
        autoContrast: "AAA",
      },
      argTypes: {
        background: { control: { type: "color" } },
        autoContrast: {
          options: ["A", "AA", "AAA", false],
          control: "select",
        },
      },
    }
  );
