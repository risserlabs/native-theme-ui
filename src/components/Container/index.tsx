/**
 * File: /components/Container/index.tsx
 * Project: -
 * File Created: 17-06-2022 13:07:00
 * Author: ajithkrm6
 * -----
 * Last Modified: 17-06-2022 18:00:10
 * Modified By: ajithkrm6
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
import { AutoContrast } from '@risserlabs/auto-contrast';

type ContainerProps = {
  autoContrast: AutoContrast;
};
const Container: FC<ContainerProps> = (props: ContainerProps) => {
  return <h1>Container This is me</h1>;
};

Container.defaultProps = {};
export default Container;
