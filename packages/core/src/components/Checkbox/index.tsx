/**
 * File: /src/components/Checkbox/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 01:05:11
 * Author: Lavanya Katari
 * -----
 * Last Modified: 06-07-2022 01:09:18
 * Modified By: Lavanya Katari
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

import ECheckbox, { CheckboxProps as ECheckboxProps } from "expo-checkbox";
import React from "react";
import { AutoContrast } from "@risserlabs/auto-contrast";
import { SxProp } from "@dripsy/core";
import { DripsyFC } from "../../dripsyHelper";
import Box from "../Box";

export type CheckboxProps = ECheckboxProps & {
  sx?: SxProp;
  defaultChecked?: boolean;
  autoContrast?: AutoContrast;
};

const Checkbox: DripsyFC<CheckboxProps> = (props: CheckboxProps) => {
  const eCheckboxProps = { ...props };
  delete eCheckboxProps.sx;
  if (props.defaultChecked) {
    eCheckboxProps.value = true;
  }
  return (
    <Box sx={props.sx}>
      <ECheckbox {...eCheckboxProps} />
    </Box>
  );
};

Checkbox.defaultProps = {};

Checkbox.defaultSx = {};

export default Checkbox;
