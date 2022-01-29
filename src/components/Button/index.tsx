/**
 * File: /components/Button/index.tsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 29-01-2022 10:17:59
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
import { Text } from 'dripsy';

// @ts-ignore
export default function Button({ children }) {
  return <Text sx={{ color: 'primary' }}>{children}</Text>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {}
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};
