/**
 * File: /storybook/manager.js
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 27-02-2022 10:29:47
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

import { addons } from '@storybook/addons';
import { themes as storybookThemes } from '@storybook/theming';

addons.setConfig({
  enableShortcuts: true,
  initialActive: 'sidebar',
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  selectedPanel: undefined,
  showNav: true,
  showPanel: true,
  theme: storybookThemes.normal,
  sidebar: {
    collapsedRoots: ['other'],
    showRoots: false
  },
  toolbar: {
    copy: { hidden: false },
    eject: { hidden: false },
    fullscreen: { hidden: false },
    title: { hidden: false },
    zoom: { hidden: false }
  }
});
