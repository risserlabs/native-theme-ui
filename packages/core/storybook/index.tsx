/**
 * File: /storybook/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 03-07-2022 10:23:16
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

import React, { ComponentType, ReactNode } from "react";
import { SxProp, Sx } from "@dripsy/core";
export * from "./storybook";

export function getProps(args: Record<string, unknown>) {
  return Object.entries(args).reduce(
    (props: Record<string, unknown>, [key, value]: [string, unknown]) => {
      if (
        key.length <= 2 ||
        (key.substring(0, 2) !== "sx" && key[2].toUpperCase() !== key[2])
      ) {
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
      if (
        key.length > 2 &&
        key.substring(0, 2) === "sx" &&
        key[2].toUpperCase() === key[2]
      ) {
        sx[key[2].toLocaleLowerCase() + key.substring(3)] = value;
      }
      return sx;
    },
    {}
  );
}

export function createArgsStory(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C: any,
  props?: Record<string, unknown>,
  children?: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (!props) props = {};
  if (children) props.children = children;
  return function StoryComponent(args: Record<string, unknown>) {
    const sxArgs = Object.entries(getSx(args)).reduce(
      (sxArgs: Args, [key, value]: [string, unknown]) => {
        if (typeof value === "string" && !value.length) return sxArgs;
        if (
          typeof value === "string" &&
          !Number.isNaN(Number(value)) &&
          !Number.isNaN(parseInt(value))
        ) {
          sxArgs[key] = Number(value);
        } else {
          sxArgs[key] = value;
        }
        return sxArgs;
      },
      {}
    );
    return <C {...props} {...getProps(args)} sx={sxArgs} />;
  };
}

export function createSxArgs(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C: ComponentType<any> & { defaultSx: SxProp },
  omit: string[] = []
) {
  const omitSet = new Set(omit);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DC = C as ComponentType<any> & { defaultSx: Sx };
  return Object.entries({
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
    sxBorderColor: DC.defaultSx?.borderColor,
  }).reduce((sxArgs: Args, [key, value]: [string, unknown]) => {
    if (!omitSet.has(key)) sxArgs[key] = value;
    return sxArgs;
  }, {});
}

export const autoContrastArgType = {
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
};

export const sxArgTypes = {
  sxBg: { control: { type: "color" } },
  sxBorderColor: { control: { type: "color" } },
  sxBorderRadius: { control: { type: "text" } },
  sxBorderWidth: { control: { type: "text" } },
  sxColor: { control: { type: "color" } },
  sxFontSize: { control: { type: "text" } },
  sxHeight: { control: { type: "text" } },
  sxM: { control: { type: "text" } },
  sxMaxWidth: { control: { type: "text" } },
  sxMinWidth: { control: { type: "text" } },
  sxP: { control: { type: "text" } },
  sxWidth: { control: { type: "text" } },
};

export function createSxArgTypes(omit: string[] = []) {
  const omitSet = new Set(omit);
  return Object.entries(sxArgTypes).reduce(
    (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sxArgTypes: Record<string, Record<string, any>>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key, value]: [string, Record<string, any>]
    ) => {
      if (!omitSet.has(key)) sxArgTypes[key] = value;
      return sxArgTypes;
    },
    {}
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Args = any;
