/**
 * File: /components/Input/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 10:35:07
 * Modified By: Ajithkrm6
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
import { TextInput as DTextInput } from "dripsy";
import { useAutoContrast, AutoContrast } from "@risserlabs/auto-contrast";
import useThemeLookup from "../../hooks/useThemeLookup";
import { DripsyFC, DTextInputProps } from "../../dripsyHelper";

export type InputProps = DTextInputProps & {
  autoContrast?: AutoContrast;
};

const Input: DripsyFC<InputProps> = (props: InputProps) => {
  const themeLookup = useThemeLookup();
  const sx = useAutoContrast(props, {
    ...Input.defaultSx,
    ...props.sx,
  });
  return (
    <DTextInput
      {...props}
      placeholderTextColor={themeLookup("color", props.placeholderTextColor)}
      selectionColor={themeLookup("color", props.selectionColor)}
      underlineColorAndroid={themeLookup("color", props.underlineColorAndroid)}
      sx={sx}
    />
  );
};

Input.defaultProps = {};

Input.defaultSx = {
  display: "block",
  width: "100%",
  p: 2,
  margin: 0,
  minWidth: 0,
  appearance: "none",
  fontSize: 1,
  lineHeight: 1,
  border: "1px solid",
  borderRadius: 4,
  color: "text",
  bg: "transparent",
};

export default Input;
