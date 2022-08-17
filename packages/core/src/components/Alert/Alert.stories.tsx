/**
 * File: /src/components/Alert/Alert.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
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
import Close from "../Close";
import Alert from "./index";
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
alert.args = {
  children: "I Am Alert",
  ...createSxArgs(),
};
alert.argTypes = {
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
};
alert.variant = {
  options: ["primary", "muted"],
  control: { type: "select" },
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const likeThemeUi = () => (
  <Alert>
    Beep boop, this is an alert! <Close />
  </Alert>
);
