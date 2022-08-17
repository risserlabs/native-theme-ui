/**
 * File: /src/components/Embed/props.ts
 * Project: @native-theme-ui/core
 * File Created: 18-07-2022 06:36:25
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 06:54:27
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

import { SxProp } from "dripsy";
import { createSplitProps } from "../../util";
import { BoxProps } from "../Box";

export type BasePropsBucket = BoxProps;

export type CustomPropsBucket = {
  ratio?: number;
};

export type IframePropsBucket = {
  allow?: string;
  allowFullScreen?: boolean;
  frameBorder?: number;
  height?: string | number;
  src?: string;
  width?: string | number;
};

export type BaseSxBucket = SxProp;

export type IframeSxBucket = SxProp;

export interface SplitPropsBuckets {
  baseProps: BasePropsBucket;
  customProps: CustomPropsBucket;
  iframeProps: IframePropsBucket;
}

export interface SplitSxBuckets {
  baseSx: BaseSxBucket;
}

export const splitProps = createSplitProps<
  BoxProps,
  SplitPropsBuckets,
  SplitSxBuckets
>({
  customProps: ["ratio"],
  iframeProps: [
    "allow",
    "allowFullScreen",
    "frameBorder",
    "height",
    "src",
    "width",
  ],
});

export type EmbedProps = BasePropsBucket &
  IframePropsBucket &
  CustomPropsBucket;
