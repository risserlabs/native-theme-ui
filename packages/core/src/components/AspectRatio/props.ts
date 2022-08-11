/**
 * File: /src/components/AspectRatio/props.ts
 * Project: @native-theme-ui/core
 * File Created: 20-07-2022 23:39:41
 * Author: Harikittu46
 * -----
 * Last Modified: 10-08-2022 07:45:44
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

import { SxProp } from "@dripsy/core";
import { createSplitProps } from "../../util";
import { DImageProps } from "../../dripsyHelper";

export type BasePropsBucket = DImageProps;

export type CustomPropsBucket = {
  ratio?: number;
};

export type BaseSxBucket = SxProp;

export interface SplitPropsBuckets {
  baseProps: BasePropsBucket;
  customProps: CustomPropsBucket;
}

export interface SplitSxBuckets {
  baseSx: BaseSxBucket;
}

export const splitProps = createSplitProps<
  DImageProps,
  SplitPropsBuckets,
  SplitSxBuckets
>({
  customProps: ["ratio"],
});

export type AspectRatioProps = BasePropsBucket & CustomPropsBucket;
