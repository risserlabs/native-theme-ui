/**
 * File: /src/components/Avatar/Avatar.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-07-2022 00:05:01
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

export default {
  title: "components/images/Avatar",
  component: Avatar,
  parameters: {
    status: { type: "beta" },
  },
};
export const avatar = createArgsStory(Avatar);
(avatar.args = {
  children: "Iam Avatar Component",
  autoContrast: Avatar.defaultProps?.autoContrast,
  ...createSxArgs(Avatar),
}),
  (avatar.argTypes = {
    ...autoContrastArgType,
    ...sxArgTypes,
  });

export const SimpleAvatar = () => <Avatar> Simple Avatar</Avatar>;

export const imageAvatar = () => (
  <Avatar
    src="https://source.unsplash.com/user/c_v_r/1900x800"
    sx={{
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "primary",
    }}
  />
);
