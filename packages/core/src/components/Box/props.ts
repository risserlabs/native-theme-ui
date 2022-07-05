/**
 * File: /src/components/Box/props.ts
 * Project: @native-theme-ui/core
 * File Created: 05-07-2022 06:24:30
 * Author: Clay Risser
 * -----
 * Last Modified: 05-07-2022 06:34:26
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

import { createSplitProps } from "../../util";

export type BoxProps = Record<string, unknown>;

export interface SplitProps {
  base: Record<string, unknown>;
}

export interface SplitSx {
  baseSx: Record<string, unknown>;
}

export const splitProps = createSplitProps<BoxProps, SplitProps, SplitSx>(
  {},
  {}
);
