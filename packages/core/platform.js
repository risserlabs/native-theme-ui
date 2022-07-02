/**
 * File: /platform.js
 * Project: @native-theme-ui/core
 * File Created: 02-07-2022 06:42:04
 * Author: Clay Risser
 * -----
 * Last Modified: 02-07-2022 06:48:15
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

module.exports =
  process.argv.join(" ").indexOf("expo-cli") > -1 ||
  process.argv.join(" ").indexOf("jest-worker") > -1
    ? "STORYBOOK_EXPO"
    : process.argv
        .join(" ")
        .indexOf("@risserlabs/storybook-react-native-server") > -1
    ? "STORYBOOK_NATIVE"
    : process.argv.join(" ").indexOf("babel") > -1
    ? "BABEL_BUILD"
    : null;
