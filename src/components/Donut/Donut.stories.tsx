/**
 * File: /components/Donut/Donut.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 05:22:01
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
import Donut from ".";
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";

storiesOf("Donut", module)
  //..add('default 50% Donut', () => <Donut max={100} value={50} />, {
  //component: Donut,
  //status: { type: 'beta' }
  //})

  .add("default", createArgsStory(Donut), {
    args: {
      children: "I am a donut",
      ...createSxArgs(Donut),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: "select",
      },
      ...sxArgTypes,
    },
  })

  .add("40% Donut", () => <Donut max={100} value={40} />, {
    component: Donut,
    status: { type: "beta" },
  })
  .add(
    "Donut with max=200 and value=80",
    () => <Donut max={200} value={80} />,
    {
      component: Donut,
      status: { type: "beta" },
    }
  )
  .add(
    "like theme-ui",
    () => (
      <Donut max={1} value={1 / 2}>
        50%
      </Donut>
    ),
    {
      component: Donut,
      status: { type: "beta" },
    }
  )
  .add(
    "with background with 70%",
    () => (
      <Box sx={{ bg: "black", p: 4 }}>
        <Donut max={100} value={70}>
          70%
        </Donut>
      </Box>
    ),
    {
      component: Donut,
      status: { type: "beta" },
    }
  )
  .add(
    "with background with 70%",
    () => (
      <Box sx={{ bg: "black", p: 4 }}>
        <Donut max={100} value={70} />
      </Box>
    ),
    {
      component: Donut,
      status: { type: "beta" },
    }
  );
