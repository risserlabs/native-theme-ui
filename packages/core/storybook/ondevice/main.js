/**
 * File: /storybook/ondevice/main.js
 * Project: @native-theme-ui/core
 * File Created: 02-07-2022 12:46:47
 * Author: Clay Risser
 * -----
 * Last Modified: 05-07-2022 04:52:46
 * Modified By: Ajith Kumar
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

module.exports = {
  stories: [
    "../../**/Button.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Box.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Text.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Container.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Link.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/NavLink.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Message.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Donut.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/*.stories.@(js|jsx|ts|tsx|md|mdx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-notes",
  ],
};
