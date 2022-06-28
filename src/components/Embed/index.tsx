/**
 * File: /components/Embed/index.tsx
 * Project: -
 * File Created: 20-06-2022 00:46:04
 * Author: Manikanta
 * -----
 * Last Modified: 28-06-2022 04:08:05
 * Modified By: Manikanta
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
import { AutoContrast, useAutoContrast } from '@risserlabs/auto-contrast';
import { E as DE, SxProp } from 'dripsy';
import { DripsyFC } from '../../dripsyHelper';

export type EmbedProps = {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  variant?: string;
};
const Embed: DripsyFC<EmbedProps> = (props: EmbedProps) => {
  const sx = useAutoContrast(props, {
    ...Embed.defaultSx,
    ...props.sx
  });
  return <DE {...props} sx={sx} />;
};

Embed.defaultProps = {};

Embed.defaultSx = {};

export default Embed;
