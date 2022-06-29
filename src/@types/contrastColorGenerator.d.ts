/**
 * File: /@types/contrastColorGenerator.d.ts
 * Project: -
 * File Created: 01-03-2022 10:08:56
 * Author: Clay Risser
 * -----
 * Last Modified: 01-03-2022 10:08:58
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

declare module "contrast-color-generator" {
  export interface Color {
    hexStr: string;
  }

  export class Generator {
    constructor(hue: number, options?: Options);

    static BRIGHTER_FIRST: number;

    static BRIGHTER_ONLY: number;

    static DARKER_FIRST: number;

    static DARKER_ONLY: number;

    generate(color: string): Color;
  }

  export interface Options {
    minimumRatio?: number;

    searchPrior?: number;
  }
}
