/**
 * File: /src/components/Label/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 18-08-2022 00:20:43
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

import React, { FC } from "react";
import { DripsyFC } from "../../dripsyHelper";
import { Text as DText, SxProp } from "dripsy";
import { TextProps as RNTextProps } from "react-native";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { BoxProps } from "../Box";

export type LabelProps = RNTextProps & {
  sx?: SxProp;
  autoContrast?: AutoContrast;
};

//export interface TextProps extends RNTextProps {
//autoContrast?: AutoContrast;
//sx?: SxProp;
//}

const Label: FC<LabelProps> = (props: LabelProps) => {
  const sx: SxProp = {
    ...props.sx,
  };

  return (
    <DText
      themeKey={"forms" as unknown as any}
      variant={"label" as unknown as any}
      {...props}
      sx={sx}
    />
  );
};

Label.defaultProps = {
  sx: {},
};
const defaultSx = {
  color: "text",
  fontWeight: "bold",
};
//export const styles = {
//text: {
//color: 'text',
//fontWeight: 700
//}
//};

export default Label;
