/**
 * File: /index.js
 * Project: @native-theme-ui/core
 * File Created: 30-06-2022 09:16:22
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 06:48:31
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

import "expo-dev-client";
import "expo-dev-launcher";
import "expo/build/Expo.fx";
import { activateKeepAwake } from "expo-keep-awake";
import { registerRootComponent } from "expo";

import App from "./App";

// eslint-disable-next-line no-undef
if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
