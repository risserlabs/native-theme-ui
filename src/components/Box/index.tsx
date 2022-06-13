/**
 * File: /components/Box/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:26
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
import { Box as DBox, SxProp } from 'dripsy';
import { ViewProps } from 'react-native';
import {
  useColor,
  BackgroundColorProvider,
  AutoContrast
} from '@risserlabs/auto-contrast';

export interface BoxProps extends ViewProps {
  sx?: SxProp;
  autoContrast?: AutoContrast;
}

const Box: FC<BoxProps> = (props: BoxProps) => {
  const sx: SxProp = {
    ...styles.box,
    ...props.sx
  };
  const color = useColor(props, sx);
  // const color = useColor(props, sx, sx.bg || sx.backgroundColor);
  return (
    <DBox {...props} sx={{ ...sx, ...(color ? { color } : {}) }}>
      <BackgroundColorProvider sx={sx}>
        {props.children}
      </BackgroundColorProvider>
    </DBox>
  );
};

Box.defaultProps = {
  sx: {}
};

export const styles = {
  box: {
    // boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  }
};

export default Box;
