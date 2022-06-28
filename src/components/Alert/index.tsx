/**
 * File: /components/Alert/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 06:18:24
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

import React from 'react';
import { DripsyFinalTheme, DripsyVariant, SxProp } from 'dripsy';
import Box, { BoxProps } from '../Box';
import useThemeLookup from '../../hooks/useThemeLookup';
import { DripsyFC } from '../../dripsyHelper';

export type AlertProps = BoxProps;

const Alert: DripsyFC<AlertProps> = (props: AlertProps) => {
  const themeLookup = useThemeLookup();
  const sx: SxProp = {
    flexDirection: 'row',
    ...Alert.defaultSx,
    ...props.sx,
    ...(props.variant ? { bg: themeLookup('color', props.variant) } : {})
  };
  return (
    <Box {...props} sx={sx}>
      {props.children}
    </Box>
  );
};

Alert.defaultProps = {
  variant: 'primary' as DripsyVariant<keyof DripsyFinalTheme>
};

Alert.defaultSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'primary',
  borderRadius: 4
};

export default Alert;
