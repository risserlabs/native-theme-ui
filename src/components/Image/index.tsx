/**
 * File: /components/Image/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:56:45
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

import React, { FC } from 'react';
import { SxProp, Image as DImage } from 'dripsy';
import { ImageProps as RNImageProps } from 'react-native';

export interface ImageProps extends RNImageProps {
  sx?: SxProp;
}

const Image: FC<ImageProps> = (props: ImageProps) => {
  const sx: SxProp = {
    ...styles.image,
    ...props.sx
  };
  return <DImage {...props} sx={{ ...sx }} />;
};

Image.defaultProps = {
  sx: {}
};

export const styles = {
  image: {
    maxWidth: '100%',
    height: 'auto'
  }
};

export default Image;
