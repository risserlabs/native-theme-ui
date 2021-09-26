/**
 * File: /src/theme.ts
 * Project: multiverse-example
 * File Created: 25-09-2021 18:51:05
 * Author: Clay Risser
 * -----
 * Last Modified: 25-09-2021 20:01:18
 * Modified By: Clay Risser
 * -----
 * BitSpur Inc (c) Copyright 2021
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

import { base as preset } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

const theme = { ...preset } as Theme;

if (theme.colors) {
  theme.colors.background = theme.colors.contentBg;
  theme.colors.text = theme.colors.fontColor;
  theme.colors.muted = theme.colors.primaryD1;
}

export default theme;
