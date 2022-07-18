/**
 * File: /src/components/AspectRatio/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 03:42:37
 * Author: Harikittu46
 * -----
 * Last Modified: 18-07-2022 04:31:34
 * Modified By: Harikittu46
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

import { SxProp, Image as DImage } from "@dripsy/core";
import { DripsyFC, DImageProps } from "../../dripsyHelper";

export type AspectRatioProps = DImageProps & {
  src?: string;
};
const AspectRatio: DripsyFC<AspectRatioProps> = (props: AspectRatioProps) => {
  const sx: SxProp = {
    ...AspectRatio.defaultSx,
    ...props.sx,
  };

  const dAspectImageProps = { ...props };
  if (props.src) dAspectImageProps.source = { uri: props.src };
  delete dAspectImageProps.src;

  return <DImage {...dAspectImageProps} sx={sx} />;
};

AspectRatio.defaultProps = {
  sx: {},
};

AspectRatio.defaultSx = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: 0,
};
export default AspectRatio;
