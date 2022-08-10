/**
 * File: /storybook/ondevice/main.js
 * Project: @native-theme-ui/core
 * File Created: 06-07-2022 05:42:28
 * Author: Clay Risser
 * -----
 * Last Modified: 10-08-2022 00:34:37
 * Modified By: Hari Krishna
 * Last Modified: 10-08-2022 00:34:37
 * Modified By: Hari Krishna
 * Last Modified: 10-08-2022 00:34:37
 * Modified By: Hari Krishna
 * Last Modified: 10-08-2022 00:34:37
 * Modified By: Hari Krishna
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
    "../../**/Textarea.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Input.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Container.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Link.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/NavLink.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Message.stories.@(js|jsx|ts|tsx|md|mdx)",
    //"../../**/Donut.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Select.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Heading.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Badge.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Paragraph.stories.@(js|jsx|ts|tsx|md|mdx)",
    //  "../../**/Card.stories.@(js|jsx|ts|tsx|md|mdx)",
     "../../**/Checkbox.stories.@(js|jsx|ts|tsx|md|mdx)",
     "../../**/Alert.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Slider.stories.@(js|jsx|ts|tsx|md|mdx)",
   //  "../../**/IconButton.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Avatar.stories.@(js|jsx|ts|tsx|md|mdx)",
     "../../**/Divider.stories.@(js|jsx|ts|tsx|md|mdx)",
    //  "../../**/Flex.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Spinner.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Grid.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Radio.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Progress.stories.@(js|jsx|ts|tsx|md|mdx)",
     "../../**/Label.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Variant.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Embed.stories.@(js|jsx|ts|tsx|md|mdx)",
    "../../**/Image.stories.@(js|jsx|ts|tsx|md|mdx)",
    // "../../**/Switch.stories.@(js|jsx|ts|tsx|md|mdx)",
  ],

  addons: [
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-notes",
  ],
};
