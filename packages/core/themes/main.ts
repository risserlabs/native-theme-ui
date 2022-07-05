/**
 * File: /themes/main.ts
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
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

import { base } from "@theme-ui/presets";
import { makeTheme } from "@dripsy/core";
import { BaseTheme } from "./index";
import variants from "./variants";

const theme = makeTheme<BaseTheme>({
  ...base,
  ...variants,
  types: {
    strictVariants: false,
  },
  colors: {
    ...base.colors,
    textPrimary: "#ffffff",
  },
  fontWeights: {},
  autoContrast: true,
});

export type MainTheme = typeof theme;

export default theme;
