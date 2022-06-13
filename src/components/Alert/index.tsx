/**
 * File: /components/Alert/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:07
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
import Box from '../Box';
import { TextProps as RNTextProps } from 'react-native';
import useThemeLookup from '../../hooks/useThemeLookup';

type VARIANTS =
  | 'accent'
  | 'muted'
  | 'secondary'
  | 'primary'
  | 'highlight'
  | undefined;
export interface TextProps extends RNTextProps {
  sx?: SxProp;
  variant?: VARIANTS;
}

const Alert: FC<TextProps> = (props: TextProps) => {
  const themeLookup = useThemeLookup();
  const sx: SxProp = {
    flexDirection: 'row',
    ...styles.alert,
    ...props.sx,
    ...(props.variant ? { bg: themeLookup('color', props.variant) } : {})
  };

  return (
    <Box {...props} sx={{ ...sx }}>
      {props.children}
    </Box>
  );
};

Alert.defaultProps = {
  variant: 'primary'
};

export const styles = {
  alert: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 3,
    py: 2,
    fontWeight: 'bold',
    color: 'white',
    bg: 'primary',
    borderRadius: 4
  }
};

export default Alert;
