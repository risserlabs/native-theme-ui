/**
 * File: /components/BackgroundColorProvider.tsx
 * Project: -
 * File Created: 02-03-2022 00:30:23
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 01:41:12
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

import React, { FC, ReactNode } from 'react';
import { SxProp } from 'dripsy';
import BackgroundColorContext from '../contexts/backgroundColor';
import useCalculatedSx from '../hooks/useCalculatedSx';

export interface BackgroundColorProviderProps {
  backgroundColor?: string;
  children: ReactNode;
  sx?: SxProp;
}

const BackgroundColorProvider: FC<BackgroundColorProviderProps> = (
  props: BackgroundColorProviderProps
) => {
  const sx = useCalculatedSx(props.sx || {});
  const backgroundColor = sx?.bg || sx?.backgroundColor;
  if (backgroundColor) {
    return (
      <BackgroundColorContext.Provider value={backgroundColor}>
        {props.children}
      </BackgroundColorContext.Provider>
    );
  }
  return <>{props.children}</>;
};

BackgroundColorProvider.defaultProps = {};

export default BackgroundColorProvider;
