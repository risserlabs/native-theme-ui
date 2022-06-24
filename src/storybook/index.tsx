/**
 * File: /storybook/index.tsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 01:24:15
 * Modified By: Harikittu46
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

import React, { ComponentType, ReactNode } from 'react';
import { SxProp, Sx } from 'dripsy';
export * from './storybook';

export function getProps(args: Record<string, unknown>) {
  return Object.entries(args).reduce(
    (props: Record<string, unknown>, [key, value]: [string, unknown]) => {
      if (key.substring(0, 2) !== 'sx') {
        props[key] = value;
      }
      return props;
    },
    {}
  );
}

export function getSx(args: Record<string, unknown>) {
  return Object.entries(args).reduce(
    (sx: Record<string, unknown>, [key, value]: [string, unknown]) => {
      if (key.substring(0, 2) === 'sx') {
        sx[key[2].toLocaleLowerCase() + key.substring(3)] = value;
      }
      return sx;
    },
    {}
  );
}

export function createArgsStory(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C: ComponentType<any>,
  props?: Record<string, unknown>,
  children?: ReactNode
) {
  if (!props) props = {};
  if (children) props.children = children;
  return function StoryComponent(args: Record<string, unknown>) {
    const sxArgs = Object.entries(getSx(args)).reduce(
      (sxArgs: Args, [key, value]: [string, unknown]) => {
        if (typeof value === 'string' && !Number.isNaN(Number(value))) {
          value = Number(value);
        }
        sxArgs[key] = value;
        return sxArgs;
      },
      {}
    );
    return <C {...props} {...getProps(args)} sx={sxArgs} />;
  };
}

export function createSxArgs(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C: ComponentType<any> & { defaultSx: SxProp }
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DC = C as ComponentType<any> & { defaultSx: Sx };
  return {
    sxBg: DC.defaultSx?.bg,
    sxM: DC.defaultSx?.m,
    sxP: DC.defaultSx?.p,
    sxFontSize: DC.defaultSx?.fontSize,
    sxColor: DC.defaultSx?.color,
    sxHeight: DC.defaultSx?.height,
    sxWidth: DC.defaultSx?.width,
    sxBorderWidth: DC.defaultSx?.borderWidth,
    sxBorderRadius: DC.defaultSx?.borderRadius,
    sxMinWidth: DC.defaultSx?.minWidth,
    sxMaxWidth: DC.defaultSx?.minWidth,
    sxBorderColor: DC.defaultSx?.borderColor
  };
}

export const sxArgTypes = {
  sxBg: { control: { type: 'color' } },
  sxColor: { control: { type: 'color' } },
  sxM: { control: 'number' },
  sxP: { control: 'number' },
  sxHeight: { control: 'number' },
  sxWidth: { control: 'text' },
  sxMinWidth: { control: 'text' },
  sxMaxWidth: { control: 'text' },
  sxBorderWidth: { control: 'text' },
  sxBorderRadius: {
    control: { type: 'text' }
  },
  sxBorderColor: { control: { type: 'color' } }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Args = Record<string, any>;
