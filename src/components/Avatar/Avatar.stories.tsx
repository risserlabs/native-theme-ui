/**
 * File: /components/Avatar/Avatar.stories.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 04:15:45
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
import {
  storiesOf,
  createArgsStory,
  sxArgTypes,
  createSxArgs,
} from "../../storybook";
import Avatar from ".";

storiesOf("Avatar", module)
  .add("Default", createArgsStory(Avatar), {
    args: {
      children: "Iam Avatar",
      autoContrast: Avatar.defaultProps?.autoContrast,
      ...createSxArgs(Avatar),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
        control: "Select",
      },
      ...sxArgTypes,
    },
  })

  .add("Simple Avatar", () => <Avatar />, {
    component: Avatar,
    status: { type: "beta" },
  })

  .add("image Avatar", () => <Avatar />, {
    component: Avatar,
    status: { type: "beta" },
  });
