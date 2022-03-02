/**
 * File: /components/Text/index.tsx
 * Project: -
 * File Created: 01-03-2022 14:20:43
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 07:51:16
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
import { Text as DText, SxProp } from 'dripsy';
import { TextProps as RNTextProps } from 'react-native';
import { AutoContrast, useColor } from '@risserlabs/auto-contrast';

export interface TextProps extends RNTextProps {
  autoContrast?: AutoContrast;
  sx?: SxProp;
}

const Text: FC<TextProps> = (props: TextProps) => {
  const sx: SxProp = {
    ...styles.text,
    ...props.sx
  };
  const color = useColor(props, sx);
  return <DText {...props} sx={{ ...sx, ...(color ? { color } : {}) }} />;
};

Text.defaultProps = {};

export const styles = {
  text: {
    color: 'text'
  }
};

export default Text;
