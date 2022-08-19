/**
 * File: /src/components/Image/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 18-08-2022 00:37:27
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
import { SxProp, Image as DImage } from "dripsy";
import { DImageProps, DripsyFC } from "../../dripsyHelper";

export type ImageProps = DImageProps & {
  src?: string;
};

const Image: FC<ImageProps> = (props: ImageProps) => {
  const sx: SxProp = {
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

const defaultSx = {
  minWidth: 50,
  maxWidth: 100,
  height: "100%",
};

export default Image;
