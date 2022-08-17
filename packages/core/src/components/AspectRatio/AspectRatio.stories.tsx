/**
 * File: /src/components/AspectRatio/AspectRatio.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 03:42:55
 * Author: Harikittu46
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
import {
  //Args,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import AspectRatio from "./index";

export default {
  title: "components/images/AspectRatio",
  component: AspectRatio,
  parameters: {
    status: { type: "beta" },
  },
};

export const aspectRatio = createArgsStory(AspectRatio);

aspectRatio.args = {
  src: "https://picsum.photos/200/300",
  ratio: 16 / 9,
  ...createSxArgs(),
};

aspectRatio.argTypes = {
  ...sxArgTypes,
};
