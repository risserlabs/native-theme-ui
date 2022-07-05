/**
 * File: /src/components/Message/Message.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 22-06-2022 04:27:49
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 05-07-2022 05:16:34
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
import React from "react";
import {
  autoContrastArgType,
  createArgsStory,
  createSxArgs,
  Args,
  sxArgTypes,
} from "../../../storybook";
import Message from "./index";

export default {
  title: "Component/Message",
  component: Message,
  parameters: {
    status: { type: "beta" },
  },
};

export const message = createArgsStory(Message);
message.args = {
  children: "I am a message component",
  autoContrast: Message.defaultProps?.autoContrast,
  ...createSxArgs(Message),
};
message.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const likeThemeUi = (args: Args) => (
  <Message sx={{ bg: args.background }}>I am a Message Component</Message>
);
likeThemeUi.args = {
  autoContrast: "AAA",
  background: "highlight",
};
likeThemeUi.argTypes = {
  ...autoContrastArgType,
  background: { control: { type: "color" } },
};
// storiesOf("Message", module).add("default", createArgsStory(Message), {
//   args: {
//     children: "I am a message",
//     ...createSxArgs(Message),
//   },
//   argTypes: {
//     ...sxArgTypes,
//   },
// });
