/**
 * File: /util.ts
 * Project: @native-theme-ui/core
 * File Created: 28-02-2022 07:21:50
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

import { SxProp } from "dripsy";

export function splitTouchableProps<T>(
  props: Record<string, unknown>
): [T, Record<string, unknown>] {
  const clonedProps = { ...props };
  const touchableProps: { [key: string]: unknown } = {};
  Object.entries(clonedProps).forEach(([key, prop]: [string, unknown]) => {
    if (
      key.length >= 3 &&
      key.substring(0, 2) === "on" &&
      key[2] === key[2].toUpperCase()
    ) {
      touchableProps[key] = prop;
      delete clonedProps[key];
    }
  });
  return [clonedProps as unknown as T, touchableProps];
}

export function createSplitProps<
  Props,
  SplitProps = Record<string, Record<string, unknown>>,
  SplitSx = Record<string, Partial<SxProp>>
>(
  propsSetsMap: Record<string, string[] | RegExp> = {},
  lastPropsSetId?: string,
  sxsSetsMap: Record<string, string[] | RegExp> = {},
  lastSxsSetId?: string
) {
  return (
    props: Props,
    defaultSx: SxProp = {}
  ): SplitProps & SplitSx & { sx: SxProp } => {
    const propsMap: Record<string, Record<string, unknown>> = {};
    const sxsMap: Record<string, Record<string, unknown>> = {};
    Object.keys(propsSetsMap).forEach(
      (propsSetId: string) => (propsMap[propsSetId] = {})
    );
    Object.keys(sxsSetsMap).forEach(
      (sxsSetId: string) => (sxsMap[sxsSetId] = {})
    );
    if (lastPropsSetId) propsMap[lastPropsSetId] = {};
    if (lastSxsSetId) sxsMap[lastSxsSetId] = {};
    const clonedProps = { ...props };
    const sx = {
      ...defaultSx,
      ...((props as { sx?: SxProp }).sx || {}),
    };
    const propsSetsIds = Object.keys(propsSetsMap);
    const sxsSetsIds = Object.keys(sxsSetsMap);
    Object.entries(clonedProps).forEach(([key, prop]: [string, unknown]) => {
      for (const propsSetId of propsSetsIds) {
        const propsSet = propsMap[propsSetId];
        const matcher = propsSetsMap[propsSetId];
        if (
          Array.isArray(matcher)
            ? new Set(matcher).has(key)
            : !!key.match(matcher)
        ) {
          propsSet[key] = prop;
          return;
        }
      }
      if (lastPropsSetId && key !== "sx") propsMap[lastPropsSetId][key] = prop;
    });
    Object.entries(sx).forEach(([key, value]: [string, unknown]) => {
      for (const sxsSetId of sxsSetsIds) {
        const sxsSet = sxsMap[sxsSetId];
        const matcher = sxsSetsMap[sxsSetId];
        if (
          Array.isArray(matcher)
            ? new Set(matcher).has(key)
            : !!key.match(matcher)
        ) {
          sxsSet[key] = value;
          return;
        }
      }
      if (lastSxsSetId) sxsMap[lastSxsSetId][key] = value;
    });
    return {
      ...(propsMap as unknown as SplitProps),
      ...(sxsMap as unknown as SplitSx),
      sx,
    };
  };
}
