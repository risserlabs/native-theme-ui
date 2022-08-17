/**
 * File: /src/components/Spinner/Spinner.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
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

import React from "react";
import { Box } from "dripsy";
import Spinner from ".";
import {
  //storiesOf,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";

export default {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    status: { type: "beta" },
  },
};

export const spinner = createArgsStory(Spinner);
spinner.args = {
  autoContrast: spinner.defaultProps?.autoContrast,
  ...createSxArgs(),
};
spinner.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

//storiesOf("Spinner", module)

//   .add("default", createArgsStory(Spinner), {
//     args: {
//       children: "Iam Spinner Component",
//       autoContrast: Spinner.defaultProps?.autoContrast,
//       ...createSxArgs()
//     },
//     argTypes: {
//       autoContrast: {
//         options: ["A", "AA", "AAA", false],
//         control: { type: "select" },
//       },
//       ...sxArgTypes,
//     },
//   })

export const size = () => (
  <div style={{ display: "flex", gap: 10 }}>
    <Spinner size="small" /> <Spinner size="large" />
  </div>
);

export const likeThemeUi = () => <Spinner color="primary" />;

export const withBackGround = () => (
  <Box sx={{ bg: "background", p: 4 }}>
    <Spinner />
  </Box>
);
