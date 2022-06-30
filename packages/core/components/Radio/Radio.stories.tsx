/**
 * File: /components/Radio/Radio.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 20-06-2022 07:09:30
 * Author: Lavanya Katari
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
import {
  storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../storybook";
import Radio from "./index";

storiesOf("Radio", module)
  .add("default", createArgsStory(Radio), {
    args: {
      children: "I Am Radio component",
      ...createSxArgs(Radio),
    },
    argTypes: {
      autoContrast: {
        options: ["A", "AA", "AAA", false],
      },
      ...sxArgTypes,
    },
  })
  .add("with background", () => <Radio></Radio>);
