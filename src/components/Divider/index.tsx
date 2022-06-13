/**
 * File: /components/Divider/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:59
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
import { View, SxProp } from 'dripsy';
import { ViewProps } from 'react-native';
export interface DividerProps extends ViewProps {
  sx?: SxProp;
}

const Divider: FC<DividerProps> = (props: DividerProps) => {
  const sx: SxProp = {
    ...styles.divider,
    ...props.sx
  };

  return <View sx={{ ...sx }} />;
};

Divider.defaultProps = {};

export const styles = {
  divider: {
    color: 'gray',
    m: 0,
    my: 2,
    border: 0,
    borderBottom: '1px solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
};

export default Divider;
