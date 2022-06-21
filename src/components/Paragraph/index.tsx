/**
 * File: /components/Paragraph/index.tsx
 * Project: -
 * File Created: 20-06-2022 05:48:50
 * Author: Clay Risser
 * -----
 * Last Modified: 21-06-2022 06:16:37
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
import { AutoContrast } from '@risserlabs/auto-contrast';
import { P as DP } from 'dripsy';
import { DPProps, DripsyStyles } from '../../dripsyHelper';

type ParagraphProps = DPProps & {
  autoContrast?: AutoContrast;
};

const Paragraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  const sx = {
    ...styles.dp,
    ...props.sx
  };
  return <DP {...props} sx={sx} />;
};

Paragraph.defaultProps = {};

const styles: DripsyStyles = {
  dp: {
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body'
  }
};

export default Paragraph;
