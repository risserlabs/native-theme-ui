/**
 * File: /src/components/Divider/Divider.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 14-07-2022 00:32:48
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
import Divider from ".";
import {
  createArgsStory,
  Args,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";

export default {
  title: "components/Divider",
  component: Divider,
  parameters: {
    status: { type: "beta" },
  },
};
export const divider = createArgsStory(Divider);
(divider.args = {
  children: "Iam Divider Component",
  autoContrast: Divider.defaultProps?.autoContrast,
  ...createSxArgs(Divider),
}),
  (divider.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const withBackGround = (args: Args) => (
  <Box sx={{ bg: args.background, p: 4, width: "100%" }}>
    <Divider autoContrast={args.autoContrast} />
  </Box>
);
