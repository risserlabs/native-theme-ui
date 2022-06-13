/**
 * File: /components/Heading/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:56:30
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
import { SxProp } from 'dripsy';
import Text from '../Text';
import { TextProps as RNTextProps } from 'react-native';
import useThemeLookup from '../../hooks/useThemeLookup';

type HEADINGS = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends RNTextProps {
  sx?: SxProp;
  as: HEADINGS;
}

const Heading: FC<HeadingProps> = (_props: HeadingProps) => {
  const themeLookup = useThemeLookup();

  const { as, ...props } = _props;
  const sx: SxProp = {
    ...themeLookup('styles', as),
    ...styles.heading,
    ...props.sx
  };
  return <Text {...props} sx={{ ...sx }} />;
};

Heading.defaultProps = {
  as: 'h1'
};

export const styles = {
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading'
  }
};

export default Heading;
