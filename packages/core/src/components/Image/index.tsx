/**
 * File: /src/components/Image/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 14-07-2022 23:48:34
 * Modified By: Hari Krishna
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
import { SxProp, Image as DImage } from "@dripsy/core";
import { DImageProps, DripsyFC } from "../../dripsyHelper";

export type ImageProps = DImageProps & {
  src?: string;
};

const Image: DripsyFC<ImageProps> = (props: ImageProps) => {
  const sx: SxProp = {
    ...Image.defaultSx,
    ...props.sx,
  };
  const dImageProps = { ...props };
  if (props.src) dImageProps.source = { uri: props.src };
  delete dImageProps.src;
  return <DImage themeKey="images" {...dImageProps} sx={sx} />;
};

Image.defaultProps = {
  sx: {},
};

Image.defaultSx = {
  minWidth: 100,
  maxWidth: 100,
  height: "100",

  // width: 150,
  // height: 150,
  // borderRadius: 150 / 2,
  // overflow: "hidden",
  // borderWidth: 3,
  // borderColor: "primary",
};

export default Image;
