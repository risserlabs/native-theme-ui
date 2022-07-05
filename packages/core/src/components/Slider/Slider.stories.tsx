/**
 * File: /src/components/Slider/Slider.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 00:27:56
 * Author: Lavanya Katari
 * -----
 * Last Modified: 05-07-2022 05:37:22
 * Modified By: Lavanya Katari
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
  autoContrastArgType,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import Slider from "./index";
export default {
  title: "components/Slider",
  component: Slider,
  parameters: {
    status: { type: "beta" },
  },
};
export const slider = createArgsStory(Slider);
slider.args = {
  children: " I am a Slider",
  autoContrast: Slider.defaultProps?.autoContrast,

  ...createSxArgs(Slider),
};
slider.sxArgTypes = {
  hidden: { slider: { type: "boolean" } },
  disabled: { slider: { type: "boolean" } },
  ...autoContrastArgType,
  ...sxArgTypes,
};
export const withBackground = () => <Box sx={{ bg: "background", p: 4 }}></Box>;

//storiesOf("Slider", module)
//  .add("default", createArgsStory(Slider), {
//    args: {
//      children: "Slider",
//      ...createSxArgs(Slider),
//    },
//    argTypes: {
//      autoContrast: {
//        options: ["A", "AA", "AAA", false],
//      },
//      ...sxArgTypes,
//    },
//  })
//  .add("with background", () => <Box sx={{ bg: "background", p: 4 }}></Box>)
//  .add("with background", () => <Slider></Slider>);
