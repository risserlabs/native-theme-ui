/**
 * File: /src/components/Divider/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 23:58:50
 * Modified By: Manikanta
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
import { View, Sx, SxProp } from "dripsy";
import { DripsyFC, DViewProps } from "../../dripsyHelper";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import Box from "../Box";

export type DividerProps = DViewProps & {
  autoContrast?: AutoContrast;
};

const Divider: FC<DividerProps> = (props: DividerProps) => {
  const mergedSx: SxProp = {
    ...props.sx,
    color: (props.sx as Sx)?.bg,
  };
  delete mergedSx.bg;
  const sx = useAutoContrast(props, mergedSx);
  (sx as Sx).bg = (sx as Sx).color as string;
  delete (sx as Sx).color;
  return <Box variant="styles.hr" sx={sx} />;
};

Divider.defaultProps = {};

const defaultSx = {
  bg: "gray",
  m: 0,
  height: 1,
  width: "100%",
  my: 2,
  border: 0,
  borderBottom: "1px solid",
};

export default Divider;
