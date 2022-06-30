/**
 * File: /components/Radio/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 20-06-2022 07:09:45
 * Author: Lavanya Katari
 * -----
 * Last Modified: 30-06-2022 08:49:28
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
import { DripsyFC } from "../../dripsyHelper";
import { AutoContrast } from "@risserlabs/auto-contrast";
import { SxProp } from "dripsy";

export type RadioProps = {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};
const Radio: DripsyFC<RadioProps> = (props: RadioProps) => {
  const sx: SxProp = {
    ...Radio.defaultSx,
    ...props.sx,
  };
  return <div>Radio component</div>;
};

Radio.defaultProps = {};
Radio.defaultSx = {
  maxWidth: "100%",
  bg: "primary",
  border: 0,
  width: 50,
  height: 50,
  borderRadius: 25,
  borderWidth: 1,
  borderColor: "primary",
};
export default Radio;
