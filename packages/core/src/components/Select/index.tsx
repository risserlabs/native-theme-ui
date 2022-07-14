/**
 * File: /src/components/Select/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 17-06-2022 06:47:48
 * Author: Harikittu46
 * -----
 * Last Modified: 14-07-2022 06:49:02
 * Modified By: Harikittu46
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
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { Picker as EPicker, PickerProps } from "@react-native-picker/picker";
import { createThemedComponent, SxProp } from "@dripsy/core";
import { DripsyFC } from "../../dripsyHelper";
import Option from "./Option";

const DPicker = createThemedComponent(EPicker);

export type SelectProps = PickerProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};

const Select: DripsyFC<SelectProps> & { Option: typeof Option } = (
  props: SelectProps
) => {
  const sx = useAutoContrast(
    props,
    {
      ...Select.defaultSx,
      ...props.sx,
    },
    true
  );
  return (
    <DPicker themeKey="forms" variant={"select" as unknown as any} sx={sx}>
      {props.children}
    </DPicker>
  );
};

Select.Option = Option;

Select.defaultProps = {};

Select.defaultSx = {
  display: "block",
  width: "100%",
  p: 2,
  appearance: "none",
  fontSize: "inherit",
  lineHeight: "inherit",
  border: "1px solid",
  borderRadius: 4,
  borderColor: "blue",
  color: "inherit",
};

export default Select;

export * from "./Option";
