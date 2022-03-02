/**
 * File: /hooks/useColor.ts
 * Project: -
 * File Created: 01-03-2022 10:04:15
 * Author: Clay Risser
 * -----
 * Last Modified: 02-03-2022 02:11:23
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

import camelCase from 'lodash.camelcase';
import colorString from 'color-string';
import startCase from 'lodash.startcase';
import { SxProp, useDripsyTheme, DripsyFinalTheme } from 'dripsy';
import { score, hex } from 'wcag-contrast';
import { useContext } from 'react';
import {
  Generator as ColorGenerator,
  Generator
} from 'contrast-color-generator';
import useCalculatedSx from './useCalculatedSx';
import useThemeLookup from './useThemeLookup';
import BackgroundColorContext from '../contexts/backgroundColor';

export type AutoContrast = boolean | 'A' | 'AA' | 'AAA';

export default function useColor(
  props: { sx?: SxProp; autoContrast?: AutoContrast } & unknown,
  sxProp?: SxProp
): string | undefined {
  const sx = useCalculatedSx(sxProp || props.sx || {});
  const themeLookup = useThemeLookup();
  const { theme } = useDripsyTheme() as {
    theme: DripsyFinalTheme & {
      autoContrast?: AutoContrast;
    };
  };
  const backgroundColor = useContext(BackgroundColorContext);
  let color: unknown = sx?.color || '#000000';
  const autoContrastValue =
    typeof props.autoContrast === 'undefined'
      ? theme.autoContrast
      : props.autoContrast;
  if (
    typeof backgroundColor === 'string' &&
    backgroundColor[0] !== '#' &&
    autoContrastValue
  ) {
    const colorKey = `text${startCase(camelCase(backgroundColor)).replace(
      / /g,
      ''
    )}`;
    if (theme.colors?.[colorKey]) color = colorKey;
  }
  const calculatedBackgroundColor = themeLookup<string>(
    'backgroundColor',
    backgroundColor
  )?.toString();
  const calculatedColor = themeLookup<string>('color', color)?.toString();
  if (!calculatedColor || !calculatedBackgroundColor) return calculatedColor;
  return autoContrast(
    calculatedBackgroundColor,
    calculatedColor,
    autoContrastValue
  );
}

export function contrast(
  color: string,
  minimumRatio = 21,
  hue = 180,
  brighterFirst = true
): string {
  const generator = new ColorGenerator(hue, {
    minimumRatio,
    searchPrior: brighterFirst
      ? Generator.BRIGHTER_FIRST
      : Generator.DARKER_FIRST
  });
  return generator.generate(toHex(color)).hexStr;
}

export function autoContrast(
  color: string | null,
  originalColor: string,
  level: boolean | 'A' | 'AA' | 'AAA' = false,
  minimumRatio = 10,
  hue?: number,
  brighterFirst?: boolean
): string {
  if (!level || !color) return originalColor;
  const scoreResult = score(hex(toHex(color), toHex(originalColor)));
  if (
    scoreResult !== 'Fail' &&
    scoreResult.length > (level === true ? 2 : level.length)
  ) {
    return originalColor;
  }
  try {
    return contrast(color, minimumRatio, hue, brighterFirst);
  } catch (err) {
    const error = err as Error;
    if (error?.message === 'No color exist which satisfies a requirement.') {
      if (!minimumRatio) return originalColor;
      return autoContrast(
        color,
        originalColor,
        level,
        minimumRatio - 1,
        hue,
        brighterFirst
      );
    }
    throw err;
  }
}

export function toHex(color: string): string {
  return colorString.to
    .hex(colorString.get(color)?.value || [0, 0, 0])
    .substring(0, 7);
}
