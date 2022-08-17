/**
 * File: /src/components/Button/props.ts
 * Project: @native-theme-ui/core
 * File Created: 05-07-2022 07:43:20
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

import { AutoContrast } from "@risserlabs/auto-contrast";
import { ReactNode } from "react";
import { SxProp } from "dripsy";
import { createSplitProps } from "../../util";
import { StyledPressableProps } from "./index";

export type BasePropsBucket = StyledPressableProps & {
  children?: ReactNode;
  hidden?: boolean;
  variant?: string;
};

export type TextPropsBucket = {
  autoContrast?: AutoContrast;
};

export type BaseSxBucket = SxProp;

export type TextSxBucket = Record<string, unknown>;

export interface SplitPropsBuckets {
  baseProps: BasePropsBucket;
  textProps: TextPropsBucket;
}

export interface SplitSxBuckets {
  baseSx: BaseSxBucket;
  textSx: TextSxBucket;
}

export const splitProps = createSplitProps<
  ButtonProps,
  SplitPropsBuckets,
  SplitSxBuckets
>(
  {
    textProps: ["autoContrast"],
  },
  {
    textSx: /^(font)|(text)|(color)/g,
  }
);

export type ButtonProps = BasePropsBucket & TextPropsBucket;
