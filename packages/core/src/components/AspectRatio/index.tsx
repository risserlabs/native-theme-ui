/**
 * File: /src/components/AspectRatio/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 27-06-2022 03:42:37
 * Author: Harikittu46
 * -----
 * Last Modified: 18-08-2022 00:24:25
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

import React, { FC } from "react";
// import { AutoContrast } from "@risserlabs/auto-contrast";
import { SxProp, Image as DImage } from "dripsy";
import { DripsyFC, DImageProps } from "../../dripsyHelper";

export type AspectRatioProps = DImageProps & {
  src?: string;
  ratio?: number;
};
const AspectRatio: FC<AspectRatioProps> = (props: AspectRatioProps) => {
  const sx: SxProp = {
    ...props.sx,
  };

  const dAspectImageProps = { ...props };
  if (props.src) dAspectImageProps.source = { uri: props.src };
  delete dAspectImageProps.src;

  return <DImage {...dAspectImageProps} sx={sx} />;
};

AspectRatio.defaultProps = {
  ratio: 16 / 9,
};

const defaultSx = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: 0,
  // paddingBottom: (100 / (ratio ))+ '%',
};

export default AspectRatio;
