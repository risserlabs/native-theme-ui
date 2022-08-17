/**
 * File: /src/components/Badge/Badge.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 07:56:44
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
import Box from "../Box";
import {
  //storiesOf,
  //Args,
  createSxArgs,
  createArgsStory,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Badge from ".";

export default {
  title: "components/badges/Badge",
  component: Badge,
  parameters: {
    status: { type: "beta" },
  },
};
export const badge = createArgsStory(Badge);
(badge.args = {
  children: "Badge",
  autoContrast: Badge.defaultProps?.autoContrast,
  ...createSxArgs(),
}),
  (badge.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const likeThemeUi = () => (
  <Box>
    <Badge
      variant="accent"
      sx={{ padding: "70", borderRadius: 100, width: 100 }}
    >
      This is a badge
    </Badge>
  </Box>
);
export const OutlineBadge = () => (
  <Badge variant="outline" sx={{ width: 100, height: 50, borderRadius: 9999 }}>
    Badge 15
  </Badge>
);
export const CircleBadge = () => (
  <Badge variant="circle" sx={{ borderRadius: 60, height: 50, width: 50 }}>
    16
  </Badge>
);
