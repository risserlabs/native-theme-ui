/**
 * File: /hooks/useCalculatedSx.ts
 * Project: -
 * File Created: 01-03-2022 10:23:12
 * Author: Clay Risser
 * -----
 * Last Modified: 01-03-2022 14:15:13
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

import { SxProp, Sx, useDripsyTheme } from 'dripsy';

export default function useCalculatedSx(sxProp: SxProp): Sx {
  const { theme } = useDripsyTheme();
  if (typeof sxProp === 'function') {
    return sxProp(theme);
  }
  return sxProp as Sx;
}
