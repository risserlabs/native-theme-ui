/**
 * File: /components/Button/index.tsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 27-02-2022 12:57:07
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
import PropTypes from 'prop-types';
import { Pressable, Text } from 'dripsy';

export interface ButtonProps {
  children: string;
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable sx={{ color: 'primary' }} onPress={console.log}>
      <Text>{props.children}</Text>
    </Pressable>
  );
}

Button.defaultProps = {
  children: null
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};
