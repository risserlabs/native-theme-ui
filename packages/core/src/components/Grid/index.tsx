/**
 * File: /src/components/Grid/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 10:03:43
 * Author: Ajithkrm6
 * -----
 * Last Modified: 13-07-2022 00:46:47
 * Modified By: Ajith Kumar
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
import Box, { BoxProps } from "../Box";

type GridProps = BoxProps & {
  autoContrast?: AutoContrast;
};

const Grid: DripsyFC<GridProps> = (props: GridProps) => {
  return <Box themeKey="grids" {...props} />;
};
Grid.defaultSx = {
  display: "grid",
  //gridGap: gap,
};
export default Grid;
