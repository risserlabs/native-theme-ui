/**
 * File: /webpack.config.js
 * Project: @native-theme-ui/core
 * File Created: 29-06-2022 07:38:31
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 01:10:31
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require("@expo/webpack-config");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const modulesToTranspile = require("./modulesToTranspile.json");

module.exports = (config, argv) =>
  createExpoWebpackConfigAsync(
    {
      ...config,
      babel: {
        dangerouslyAddModulePathsToTranspile: modulesToTranspile,
      },
    },
    argv
  );
