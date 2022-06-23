/**
 * File: /components/Link/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 23-06-2022 15:33:28
 * Modified By: Ajithkrm6
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

export interface LinkProps extends RNTextProps {
  sx?: SxProp;
  href: string;
}

const Link: FC<LinkProps> = (props: LinkProps) => {
  const themeLookup = useThemeLookup();
  const sx: SxProp = {
    ...themeLookup('styles', 'a'),
    ...styles.link,
    ...props.sx
  };

  return (
    <Text {...props} sx={{ ...sx }}>
      {props.children}
    </Text>
  );
};

Link.defaultProps = {
  children: null
};

export const styles = {
  link: {}
};

export default Link;
