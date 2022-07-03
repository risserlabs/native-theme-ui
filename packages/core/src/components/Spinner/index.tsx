/**
 * File: /src/components/Spinner/index.tsx
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
import { ActivityIndicator as DActivityIndicator, SxProp } from "@dripsy/core";
import { ActivityIndicatorProps as RNActivityIndicator } from "react-native";
import useThemeLookup from "../../hooks/useThemeLookup";
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast } from "@risserlabs/auto-contrast";

export type SpinnerProps = RNActivityIndicator & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  color?: string;
};

//export interface ActivityIndicatorProps extends RNActivityIndicator {
// sx?: SxProp;
//color?: string;
//}

const Spinner: DripsyFC<SpinnerProps> = (props: SpinnerProps) => {
  const themeLookup = useThemeLookup();
  const sxProp: SxProp = { ...styles.spinner, ...props.sx };

  return (
    <DActivityIndicator
      {...props}
      color={themeLookup("color", props.color)}
      sx={sxProp}
    />
  );
};

Spinner.defaultProps = {
  sx: {},
  size: 48,
};

export const styles = {
  spinner: {},
};
Spinner.defaultSx = {};
export default Spinner;
