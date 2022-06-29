/**
 * File: /storybook/expo.tsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 08:08:59
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
import asyncStorage from "@react-native-async-storage/async-storage";
import { DripsyProvider } from "dripsy";
import { Platform } from "react-native";
import { withKnobs } from "@storybook/addon-knobs";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import "./rn-addons";
import * as themes from "../themes";

addDecorator(withKnobs);
addDecorator((Root: any) => (
  <DripsyProvider theme={themes.main as never}>
    <Root />
  </DripsyProvider>
));

configure(() => {
  require("./stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === "android" ? "10.0.2.2" : "0.0.0.0",
  asyncStorage,
});

export default StorybookUIRoot;
