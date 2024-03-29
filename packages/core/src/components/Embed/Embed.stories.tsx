/**
 * File: /src/components/Embed/Embed.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 05:47:44
 * Author: Ajith Kumar
 * -----
 * Last Modified: 17-08-2022 11:02:15
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
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
import Embed from "./index";
import Image from "../Image";

export default {
  title: "components/Embed",
  component: Embed,
  parameters: {
    status: { type: "beta" },
  },
};

export const embed = createArgsStory(Embed);
embed.args = {
  src: "https://www.youtube.com/embed/GNCd_ERZvZM",
  autoContrast: Embed.defaultProps?.autoContrast,
  ratio: 16 / 9,
  ...createSxArgs(),
};
embed.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const LikeThemeUI = () => (
  <Image
    source={{
      uri: "https://www.youtube.com/embed/GNCd_ERZvZM",
    }}
    sx={{
      height: 100,
      width: 100,
      borderRadius: 50,
    }}
  />
);
