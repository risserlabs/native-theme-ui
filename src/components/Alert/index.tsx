/**
 * File: /components/Alert/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 29-06-2022 00:43:45
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

import React from 'react';
import { styled } from 'dripsy';
import { useAutoContrast } from '@risserlabs/auto-contrast';
import Box, { BoxProps } from '../Box';
import { DripsyFC, PatchStyledProps } from '../../dripsyHelper';

export type AlertProps = BoxProps;

const StyledBox = styled(Box, {
  themeKey: 'alerts',
  defaultVariant: 'primary'
})({});

const Alert: DripsyFC<AlertProps> = (props: AlertProps) => {
  const sx = useAutoContrast(props, {
    ...Alert.defaultSx,
    ...props.sx
  });
  const styledBoxProps = { ...props };
  delete styledBoxProps.autoContrast;
  return (
    <StyledBox {...(styledBoxProps as PatchStyledProps<BoxProps>)} sx={sx} />
  );
};

Alert.defaultProps = {};

Alert.defaultSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 3,
  py: 2,
  fontWeight: 'bold',
  borderRadius: 4
};

export default Alert;
