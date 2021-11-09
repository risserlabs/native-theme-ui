/**
 * File: /chrome/devtools.ts
 * Project: multiverse-example
 * File Created: 09-11-2021 01:31:03
 * Author: Clay Risser
 * -----
 * Last Modified: 09-11-2021 01:51:23
 * Modified By: Clay Risser
 * -----
 * BitSpur, Inc. (c) Copyright 2021
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

import { ExtensionPanel } from './types';

chrome.devtools.panels.create(
  'Multiverse',
  '',
  'panel.html', // relative path to nextjs
  (_panel: ExtensionPanel) => {}
);
