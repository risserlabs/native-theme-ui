/**
 * File: /src/components/Avatar/Avatar.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 18-07-2022 00:45:31
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
  // storiesOf,
  createArgsStory,
  sxArgTypes,
  createSxArgs,
  autoContrastArgType,
} from "../../../storybook";
import Avatar from ".";
import Image from "../Image";

export default {
  title: "components/images/Avatar",
  component: Avatar,
  parameters: {
    status: { type: "beta" },
  },
};
export const avatar = createArgsStory(Avatar);
(avatar.args = {
  children: "UI",
  autoContrast: Avatar.defaultProps?.autoContrast,
  ...createSxArgs(Avatar),
}),
  (avatar.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const SimpleAvatar = () => (
  <Image
    source={{
      uri: "https://images.unsplash.com/photo-1657739880076-d8232c1da8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    }}
    sx={{
      width: 100,
      height: 100,
      borderRadius: 60,
    }}
  />
);

export const imageAvatar = () => (
  <Image
    source={{
      uri: "https://images.unsplash.com/photo-1657739880076-d8232c1da8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    }}
    sx={{
      height: 100,
      width: 100,
      borderRadius: 60,
    }}
  />
);
