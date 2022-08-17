/**
 * File: /theme.ts
 * Project: @native-theme-ui/core
 * File Created: 17-08-2022 07:19:35
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 12:59:12
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

import * as presets from "@theme-ui/presets";
import { DripsyBaseTheme, makeTheme } from "dripsy";
import { ExtendedCustomTheme } from "./src/theme";
import variants from "./src/variants";

export const base = wrapTheme(presets.base);
export const bootstrap = wrapTheme(presets.bootstrap);
export const bulma = wrapTheme(presets.bulma);
export const dark = wrapTheme(presets.dark);
export const deep = wrapTheme(presets.deep);
export const funk = wrapTheme(presets.funk);
export const future = wrapTheme(presets.future);
export const roboto = wrapTheme(presets.roboto);
export const sketchy = wrapTheme(presets.sketchy as never);
export const swiss = wrapTheme(presets.swiss);
export const system = wrapTheme(presets.system);
export const tailwind = wrapTheme(presets.tailwind);
export const tosh = wrapTheme(presets.tosh);

function wrapTheme(theme: Record<string, unknown>) {
  return makeTheme({
    ...theme,
    ...variants,
    autoContrast: "AAA",
  } as DripsyBaseTheme);
}

export const main = makeTheme({
  ...presets.base,
  ...variants,
  autoContrast: true,
  fontWeights: {},
  colors: {
    ...base.colors,
    textPrimary: "#ffffff",
  },
  types: {
    strictVariants: false,
  },
} as DripsyBaseTheme);

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends ExtendedCustomTheme {}
}
