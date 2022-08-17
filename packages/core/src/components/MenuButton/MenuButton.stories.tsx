/**
 * File: /src/components/MenuButton/MenuButton.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 19-06-2022 06:50:53
 * Author: K S R P BHUSHAN
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
  //storiesOf,
  createArgsStory,
  sxArgTypes,
  createSxArgs,
  autoContrastArgType,
} from "../../../storybook";
import MenuButton from ".";

export default {
  title: "components/buttons/MenuButton",
  component: MenuButton,
  parameters: {},
};
export const menuButton = createArgsStory(MenuButton);
(menuButton.args = {
  children: "Iam Menu Button Component",
  autoContrast: MenuButton.defaultProps?.autoContrast,
  ...createSxArgs(),
}),
  (menuButton.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

// storiesOf("IconButton", module)
//   .add("default Icon", createArgsStory(IconButton), {
//     args: {
//       children: "Iam Icon Button ",
//       autoContrast: IconButton.defaultProps?.autoContrast,
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

export const HomeMenuButton = () => (
  <MenuButton
    source={require("../../../assets/homeIcon.png")}
    menuSx={{
      width: 30,
      height: 30,
      overflow: "hidden",
    }}
    onPress={() => console.log("HOME MENU PRESSED")}
  />
);

export const NotificationIconButton = () => (
  <MenuButton
    source={require("../../../assets/notificationIcon.png")}
    menuSx={{
      width: 30,
      height: 30,
      overflow: "hidden",
    }}
    onPress={() => console.log("NOTIFICATION MENU PRESSED")}
  />
);
