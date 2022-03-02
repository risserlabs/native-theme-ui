/**
 * File: /themes/index.ts
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 08:28:12
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

import { DripsyBaseTheme, makeTheme } from 'dripsy';
import * as presets from '@theme-ui/presets';
import main from './main';
import { AutoContrast } from '@risserlabs/auto-contrast';

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
  return makeTheme<BaseTheme>({
    ...theme,
    autoContrast: 'AAA'
  });
}

export type BaseTheme = DripsyBaseTheme & {
  autoContrast?: AutoContrast;
};

export { main };
