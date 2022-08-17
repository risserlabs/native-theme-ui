/**
 * File: /theme.ts
 * Project: @native-theme-ui/core
 * File Created: 17-08-2022 07:19:35
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 07:36:46
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

declare module "dripsy" {
  interface DripsyCustomTheme {
    autoContrast?: import("@risserlabs/auto-contrast").AutoContrast;
    variants?: Record<string, unknown>;
    images?: Record<string, unknown>;
  }
}

export default null;
