/**
 * File: /src/components/Alert/Alert.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 05-08-2022 01:15:01
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

import React, { Component } from "react";
import Close from "../Close";
import Alert from ".";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";
export default {
  title: "components/alerts/Alert",
  component: Alert,
  parameters: {
    status: { type: "beta" },
  },
};
export const alert = createArgsStory(Alert);
(alert.args = {
  children: "I Am Alert",
  // variant: Alert.defaultProps?.variant,
  ...createSxArgs(Alert),
}),
  (alert.argTypes = {
    autoContrast: {
      options: ["A", "AA", "AAA", false],
      control: { type: "select" },
    },
  }),
  (alert.variant = {
    options: ["primary", "muted"],
    control: { type: "select" },
    ...autoContrastArgType,
    ...sxArgTypes,
  });
export const likeThemeUi = () => (
  <Alert>
    Beep boop, this is an alert! <Close />
  </Alert>
);

//storiesOf("atoms/Alert", module)
// .addParameters({
//  status: { type: "beta" },
// })
// .add("default", createArgsStory(Alert), {
//  args: {
//    children: "I am Alert",
//    variant: Alert.defaultProps?.variant,
//    ...createSxArgs(Alert),
//  },
//  argTypes: {
//    autoContrast: {
//      options: ["A", "AA", "AAA", false],
//      control: { type: "select" },
//    },
//   variant: {
//     options: ["primary", "muted"],
//     control: { type: "select" },
//    },
//    ...sxArgTypes,
//  },
// })

//.add("like theme ui", () => (
// <Alert>
//   Beep boop, this is an alert! <Close />
//  </Alert>
// ));
