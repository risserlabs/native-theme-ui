/**
 * File: /themes/main.ts
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 02:11:20
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

import { base } from '@theme-ui/presets';
import { makeTheme } from 'dripsy';
import { BaseTheme } from '.';

const theme = makeTheme<BaseTheme>({
  ...base,
  types: {
    strictVariants: false
  },
  colors: {
    ...base.colors,
    textPrimary: '#ffffff'
  },
  fontWeights: {},
  autoContrast: 'A'
});

export type MainTheme = typeof theme;

export default theme;
