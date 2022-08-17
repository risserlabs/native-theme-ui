/**
 * File: /src/components/Radio/Radio.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 20-06-2022 07:09:30
 * Author: Lavanya Katari
 * -----
 * Last Modified: 17-08-2022 10:43:00
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

//import { defaultBreakpoints } from "@theme-ui/css";
import React from "react";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Radio from "./index";
export default {
  title: "components/forms/Radio",
  component: Radio,
  parameters: {
    status: { type: "beta" },
  },
};
export const radio = createArgsStory(Radio);
radio.args = {
  children: "I am Radio",
  autoContrast: Radio.defaultProps?.autoContrast,
  ...createSxArgs(),
};
radio.argTypes = {
  hidden: { control: { type: "boolean" } },
  disabled: { control: { type: "boolean" } },
  ...autoContrastArgType,
  ...sxArgTypes,
};

//storiesOf("Radio", module)
// .add("default", createArgsStory(Radio), {
//   args: {
//     children: "I Am Radio component",
//     ...createSxArgs()
//   },
//   argTypes: {
//     autoContrast: {
//      options: ["A", "AA", "AAA", false],
//    },
//   ...sxArgTypes,
//  },
//  })
//.add("with background", () => <Radio></Radio>);
