/**
 * File: /src/components/Box/props.ts
 * Project: @native-theme-ui/core
 * File Created: 05-07-2022 06:24:30
 * Author: Clay Risser
 * -----
 * Last Modified: 14-07-2022 07:05:56
 * Modified By: Manikanta
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

import { AutoContrast } from "@risserlabs/auto-contrast";
import { SxProp } from "dripsy";
import { createSplitProps } from "../../util";
import { DBoxProps, DPressableProps, PatchVariant } from "../../dripsyHelper";

export type BasePropsBucket = PatchVariant<DBoxProps>;

export type TextPropsBucket = {
  autoContrast?: AutoContrast;
};

export type PressablePropsBucket = PatchVariant<DPressableProps>;

export type BaseSxBucket = SxProp;

export type TextSxBucket = Record<string, unknown>;

export type PressableSxBucket = Record<string, unknown>;

export interface SplitPropsBuckets {
  baseProps: BasePropsBucket;
  textProps: TextPropsBucket;
  pressableProps: PressablePropsBucket;
}

export interface SplitSxBuckets {
  baseSx: BaseSxBucket;
  textSx: TextSxBucket;
  pressableSx: PressableSxBucket;
}

export const pressablePropKeys = [
  "onLongPress",
  "onPress",
  "onPressIn",
  "onPressOut",
];

export const splitProps = createSplitProps<
  BoxProps,
  SplitPropsBuckets,
  SplitSxBuckets
>(
  {
    textProps: ["autoContrast"],
    pressableProps: /^on/g,
  },
  {
    textSx: /^(font)|(text)|(color)/g,
    pressableSx: ["cursor"],
  }
);

export type BoxProps = BasePropsBucket & TextPropsBucket & PressablePropsBucket;
