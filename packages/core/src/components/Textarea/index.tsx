/**
 * File: /src/components/Textarea/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
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
import { TextInput as DTextInput, SxProp } from "@dripsy/core";
import { TextInputProps as RNTextInputProps } from "react-native";
import { AutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC } from "../../dripsyHelper";
import useThemeLookup from "../../hooks/useThemeLookup";

type TextareaProps = RNTextInputProps & {
  sx?: SxProp;
  autoContrast?: AutoContrast;
};

//export interface TextareaProps extends RNTextInputProps {
//sx?: SxProp;
//selectionColor?: string;
//placeholderTextColor?: string;
//underlineColorAndroid?: string;
//}

const Textarea: DripsyFC<TextareaProps> = (props: TextareaProps) => {
  const themeLookup = useThemeLookup();
  const sx: SxProp = {
    ...Textarea.defaultSx,
    ...props.sx,
  };
  return (
    <DTextInput
      {...props}
      multiline
      placeholderTextColor={themeLookup("color", props.placeholderTextColor)}
      selectionColor={themeLookup("color", props.selectionColor)}
      underlineColorAndroid={themeLookup("color", props.underlineColorAndroid)}
      sx={sx}
    />
  );
};

Textarea.defaultProps = {
  sx: {},
  numberOfLines: 4,
};

Textarea.defaultSx = {
  bg: "transparent",
};

//export const styles = {
//input: {
//display: 'block',
//width: '100%',
//p: 2,
//margin: 0,
//minWidth: 0,
// appearance: 'none',
//fontSize: 1,
//border: '1px solid',
//borderRadius: 4,
//color: 'text',
//bg: 'transparent'
//}
//};

export default Textarea;
