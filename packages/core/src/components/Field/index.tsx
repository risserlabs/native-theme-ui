/**
 * File: /src/components/Field/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 04:20:16
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
import { TextInput as DTextInput } from "@dripsy/core";
import {
  BackgroundColorProvider,
  AutoContrast,
  useAutoContrast,
} from "@risserlabs/auto-contrast";
import { DTextInputProps, DripsyFC } from "../../dripsyHelper";

export type FieldProps = DTextInputProps & {
  autoContrast?: AutoContrast;
};

const Field: DripsyFC<FieldProps> = (props: FieldProps) => {
  const sx = useAutoContrast(props, {
    ...Field.defaultSx,
    ...props.sx,
  });
  return (
    <DTextInput {...props} sx={sx}>
      <BackgroundColorProvider sx={sx}>
        {props.children}
      </BackgroundColorProvider>
    </DTextInput>
  );
};

Field.defaultProps = {};
Field.defaultSx = {
  boxSizing: "border-box",
  display: "inline-block",
  margin: 0,
  minWidth: 0,
};
export default Field;
