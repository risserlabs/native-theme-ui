/**
 * File: /src/components/AspectImage/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 23-06-2022 03:43:01
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 17-08-2022 06:54:27
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

import { SxProp, Image as DImage } from "dripsy";
import { DripsyFC, DImageProps } from "../../dripsyHelper";

export type AspectImageProps = DImageProps & {
  src?: string;
  ratio?: number;
};
const AspectImage: DripsyFC<AspectImageProps> = (props: AspectImageProps) => {
  const sx: SxProp = {
    ...AspectImage.defaultSx,
    ...props.sx,
  };

  const dAspectImageProps = { ...props };
  if (props.src) dAspectImageProps.source = { uri: props.src };
  delete dAspectImageProps.src;

  return <DImage {...dAspectImageProps} sx={sx} />;
};

AspectImage.defaultProps = {
  sx: {},
};

AspectImage.defaultSx = {
  minWidth: 100,
  maxWidth: 100,
  height: "100",
  objectFit: "cover",
};

export default AspectImage;
