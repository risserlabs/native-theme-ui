/**
 * File: /src/components/Container/Container.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 13:00:27
 * Author: ajithkrm6
 * -----
 * Last Modified: 13-07-2022 00:29:39
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

import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";

import Container from "./index";

export default {
  title: "components/layout/Container",
  component: Container,
  parameters: {
    status: { type: "beta" },
  },
};

export const container = createArgsStory(Container);
container.args = {
  children: "I am Container",
  autoContrast: Container.defaultProps?.autoContrast,
  ...createSxArgs(Container),
};
container.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};
//storiesOf("Container", module).add("default", createArgsStory(Container), {
//args: {
//children: "I am a Container",
//autoContrast: Container.defaultProps?.autoContrast,
//...createSxArgs(Container),
//},
//argTypes: {
//autoContrast: {
//options: ["A", "AA", "AAA", false],
// control: { type: "select" },
//},
// ...sxArgTypes,
// },});
