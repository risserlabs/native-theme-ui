/**
 * File: /components/Select/Option.tsx
 * Project: @native-theme-ui/core
 * File Created: 22-06-2022 06:05:53
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 08:49:28
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

import React, { FC } from "react";
import {
  Picker as EPicker,
  PickerItemProps,
} from "@react-native-picker/picker";

export type OptionProps = Omit<PickerItemProps, "label"> & {
  children?: string;
};

const Option: FC<OptionProps> = (props: OptionProps) => {
  return <EPicker.Item {...props} label={props.children} />;
};

export default Option;
