/**
 * File: /components/Field/index.tsx
 * Project: -
 * File Created: 27-06-2022 04:20:16
 * Author: Lavanya Katari
 * -----
<<<<<<< HEAD
 * Last Modified: 28-06-2022 05:38:03
 * Modified By: Lavanya Katari
=======
 * Last Modified: 28-06-2022 05:38:03
 * Modified By: Lavanya Katari
>>>>>>> 98c567ba0c7c6db44c168b16c81b14f86583c291
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
import { Box as DBOX } from 'dripsy';
import {
  BackgroundColorProvider,
  AutoContrast,
  useAutoContrast
} from '@risserlabs/auto-contrast';
import { DBoxProps, DripsyFC } from '../../dripsyHelper';

export type FieldProps = DBoxProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
};

const Field: DripsyFC<FieldProps> = (props: FieldProps) => {
  const sx = useAutoContrast(props, {
    ...Field.defaultSx,
    ...props.sx
  });
  return (
    <DBOX {...props} sx={sx}>
      <BackgroundColorProvider sx={sx}>
        {props.children}
      </BackgroundColorProvider>
    </DBOX>
  );
};

Field.defaultProps = {};
Field.defaultSx = {
  boxSizing: 'border-box',
  display: 'inline-block',
  margin: 0,
  minWidth: 0
};
export default Field;
