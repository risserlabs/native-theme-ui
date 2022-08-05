/**
 * File: /src/components/Input/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 05-08-2022 01:14:03
 * Modified By: K S R P BHUSHAN
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
import { TextInput as DTextInput } from "@dripsy/core";
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
      themeKey={"forms" as unknown as any}
      variant={"input" as unknown as any}
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
  display: "flex",
  width: "100%",
  p: 12,
  margin: 10,
  minWidth: 0,
  appearance: "none",
  fontSize: 5,
  lineHeight: 1,
  border: "2px solid",
  borderRadius: 4,
  color: "text",
  bg: "transparent",
};

export default Input;
