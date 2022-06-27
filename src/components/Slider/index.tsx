/**
 * File: /components/Slider/index.tsx
 * Project: -
 * File Created: 27-06-2022 00:27:04
 * Author: Lavanya Katari
 * -----
 * Last Modified: 27-06-2022 01:05:21
 * Modified By: Lavanya Katari
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
import Slider from '@react-native-community/slider';
import { AutoContrast } from '@risserlabs/auto-contrast';
import { SxProp } from 'dripsy';
import { DripsyFC } from '../../dripsyHelper';
import Box from '../Box';
export type SliderProps = {

//export type SliderProps = ESliderProps & {
  sx?: SxProp;
  autoContrast?: AutoContrast;
};
const Slider: FC<SliderProps> = (props: SliderProps) => {
const Slider: DripsyFC<SliderProps> = (props: SliderProps) => {
  const eSliderProps = { ...props };
  delete eSliderProps.sx;
}
};

Slider.defaultSx = {
  display: 'block',
  width: '100%',
  height: 8,
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: 9999,
  color: 'inherit',
  bg: 'purple'
};
export default Slider;
