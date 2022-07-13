/**
 * File: /src/components/Input/Input.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 11-07-2022 04:05:17
 * Modified By: K S R P BHUSHAN
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
import { Box } from "@dripsy/core";
import { action } from "@storybook/addon-actions";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    status: { type: "beta" },
  },
};

export const input = createArgsStory(Input, {
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  onFocus: action("onFocus"),
});
input.args = {
  ...createSxArgs(Input),
  autoContrast: Input.defaultProps?.autoContrast,
};
input.argTypes = {
  ...sxArgTypes,
  ...autoContrastArgType,
};

// storiesOf("Input", module)
//   .add(
//     "default",
//     createArgsStory(Input, {
//       onBlur: action("onBlur"),
//       onChange: action("onChange"),
//       onFocus: action("onFocus"),
//     }),
//     {
//       args: {
//         ...createSxArgs(Input),
//       },
//       argTypes: {
//         ...sxArgTypes,
//       },
//     }
//   )
//   .add(
//     "like theme-ui",
//     () => (
//       <Box>
//         <Input defaultValue="Hello" />
//       </Box>
//     ),
//     {
//       component: Input,
//       status: { type: "beta" },
//     }
//   )
//   .add(
//     "with background",
//     () => (
//       <Box sx={{ bg: "background", p: 4 }}>
//         <Input />
//       </Box>
//     ),
//     {
//       component: Input,
//       status: { type: "beta" },
//     }
//   );
