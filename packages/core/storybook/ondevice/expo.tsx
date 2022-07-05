/**
 * File: /storybook/ondevice/expo.tsx
 * Project: @native-theme-ui/core
 * File Created: 02-07-2022 12:47:49
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 10:23:16
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
import { Platform } from "react-native";
import { getStorybookUI, addDecorator } from "@storybook/react-native";
import { DripsyProvider } from "@dripsy/core";
import * as themes from "../../themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// addDecorator();

import "./storybook.requires";

export default getStorybookUI({
  host: Platform.OS === "android" ? "10.0.2.2" : "0.0.0.0",
});
