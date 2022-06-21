/**
 * File: /storybook/index.tsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 21-06-2022 08:05:29
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

import React, { ComponentType } from 'react';
import { SxProp } from 'theme-ui';
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

export function createDefaultStory(C: ComponentType<Record<string, unknown>>) {
  return function StoryComponent(args: Record<string, unknown>) {
    return <C {...getProps(args)} sx={getSx(args)} />;
  };
}
