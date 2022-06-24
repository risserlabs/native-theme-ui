/**
 * File: /components/Message/index.tsx
 * Project: -
 * File Created: 23-06-2022 18:32:39
 * Author: Ajithkrm6
 * -----
 * Last Modified: 24-06-2022 11:09:07
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

import React from 'react';
import Box, { BoxProps } from '../Box';
import { DripsyFC } from '../../dripsyHelper';

export type MessageProps = BoxProps;

const Message: DripsyFC<MessageProps> = (props: MessageProps) => {
  const sx = {
    ...Message.defaultSx,
    ...props.sx
  };
  return <Box {...props} sx={sx} />;
};

Message.defaultProps = {};

Message.defaultSx = {
  padding: 3,
  paddingLeft: (t) => t.space && Number(t.space[3]) - Number(t.space[1]),
  borderLeftWidth: (t) => t.space && Number(t.space[1]),
  borderLeftStyle: 'solid',
  borderLeftColor: 'primary',
  borderRadius: 4,
  bg: 'highlight'
};

export default Message;
