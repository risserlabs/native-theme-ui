/**
 * File: /src/components/Forms/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 21-06-2022 02:17:32
 * Author: Harikittu46
 * -----
 * Last Modified: 10-08-2022 06:35:19
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
import { AutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC } from "../../dripsyHelper";
import { SxProp } from "@dripsy/core";

export type FormsProps = {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};
const Forms: DripsyFC<FormsProps> = (props: FormsProps) => {
  const sx: SxProp = {
    ...Forms.defaultSx,
    ...props.sx,
  };
  return <div>Form component</div>;
};

Forms.defaultProps = {};
Forms.defaultSx = {};
export default Forms;
