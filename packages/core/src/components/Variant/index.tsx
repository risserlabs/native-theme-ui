/**
 * File: /src/components/Variant/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 23:52:10
 * Author: Lavanya Katari
 * -----
 * Last Modified: 03-07-2022 10:23:15
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

import React from "react";
import { AutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC } from "../../dripsyHelper";
import { SxProp } from "@dripsy/core";
import Box from "../Box";
export type VariantProps = {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};

const Variant: DripsyFC<VariantProps> = (props: VariantProps) => {
  const sx: SxProp = {
    ...Variant.defaultSx,
    ...props.sx,
  };
  return <div {...props}>Variants component</div>;
};
Variant.defaultProps = {};
Variant.defaultSx = {
  boxSizing: "border-box",
  display: "inline-block",
  margin: 0,
  minWidth: 0,
  maxWidth: 0,
};
export default Variant;
