/**
 * File: /src/components/IconButton/IconButton.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 10-08-2022 03:35:10
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
import {
  //storiesOf,
  createArgsStory,
  sxArgTypes,
  createSxArgs,
  autoContrastArgType,
} from "../../../storybook";
import IconButton from ".";

export default {
  title: "components/buttons/IconButton",
  component: IconButton,
  parameters: {
    status: { type: "beta" },
  },
};
export const iconButton = createArgsStory(IconButton);
(iconButton.args = {
  children: "Iam Icon Button Component",
  autoContrast: IconButton.defaultProps?.autoContrast,
  ...createSxArgs(IconButton),
}),
  (iconButton.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const HomeIconButton = () => (
  <IconButton
    source={require("../../../assets/homeIcon.png")}
    iconSx={{
      width: 30,
      height: 50,
      overflow: "hidden",
    }}
    onPress={() => console.log("HOME ICON PRESSED")}
  />
);

export const NotificationIconButton = () => (
  <IconButton
    source={require("../../../assets/notificationIcon.png")}
    iconSx={{
      width: 30,
      height: 50,
      overflow: "hidden",
    }}
    onPress={() => console.log("NOTIFICATION ICON PRESSED")}
  />
);
