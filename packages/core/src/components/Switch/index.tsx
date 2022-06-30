/**
 * File: /src/components/Switch/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 30-06-2022 07:49:47
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 10:23:41
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
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import useThemeLookup from "../../hooks/useThemeLookup";

import { DripsyFC } from "../../dripsyHelper";
import { SxProp } from "dripsy";
import { AutoContrast } from "@risserlabs/auto-contrast";
export type SwitchProps = RNSwitchProps & {
  sx?: SxProp;
  autocontrast?: AutoContrast;
};

//export interface SwitchProps extends RNSwitchProps {
// ios_backgroundColor?: string;
//thumbColor?: string;
//trackColor?: { false?: string; true?: string };}

const Switch: DripsyFC<SwitchProps> = (props: SwitchProps) => {
  const themeLookup = useThemeLookup();

  return (
    <RNSwitch
      {...props}
      ios_backgroundColor={themeLookup("color", props.ios_backgroundColor)}
      thumbColor={themeLookup("color", props.thumbColor)}
      trackColor={{
        false: themeLookup("color", props.trackColor?.false),
        true: themeLookup("color", props.trackColor?.true),
      }}
    />
  );
};

Switch.defaultProps = {};
Switch.defaultSx = {
  display: "block",
  height: "5px",
  margin: 0,
  marginRight: "20px",
  padding: 0,
  bg: "gray",
  overflow: "hidden",
  color: "primary",
  borderRadius: 9999,
  border: "none",
};

export default Switch;
