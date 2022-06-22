/**
 * File: /components/Container/index.tsx
 * Project: -
 * File Created: 17-06-2022 13:07:00
 * Author: ajithkrm6
 * -----
 * Last Modified: 22-06-2022 07:42:29
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
import Box, { BoxProps } from '../Box';
import { DripsyFC } from '../../dripsyHelper';

export type ContainerProps = BoxProps;

const Container: DripsyFC<ContainerProps> = (props: ContainerProps) => {
  return <Box {...props} />;
};

Container.defaultProps = {};

Container.defaultSx = {};

export default Container;
