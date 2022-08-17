/**
 * File: /storybook/index.d.ts
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 06:54:27
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
import { ComponentType, ReactNode } from "react";
import { SxProp } from "dripsy";
export * from "./storybook";
export declare function getProps(
  args: Record<string, unknown>
): Record<string, unknown>;
export declare function getSx(
  args: Record<string, unknown>
): Record<string, unknown>;
export declare function createArgsStory(
  C: any,
  props?: Record<string, unknown>,
  children?: ReactNode
): any;
export declare function createSxArgs(
  C: ComponentType<any> & {
    defaultSx: SxProp;
  },
  omit?: string[]
): any;
export declare const autoContrastArgType: {
  autoContrast: {
    options: (string | boolean)[];
    control: {
      type: string;
    };
  };
};
export declare const sxArgTypes: {
  sxBg: {
    control: {
      type: string;
    };
  };
  sxBorderColor: {
    control: {
      type: string;
    };
  };
  sxBorderRadius: {
    control: {
      type: string;
    };
  };
  sxBorderWidth: {
    control: {
      type: string;
    };
  };
  sxColor: {
    control: {
      type: string;
    };
  };
  sxFontSize: {
    control: {
      type: string;
    };
  };
  sxHeight: {
    control: {
      type: string;
    };
  };
  sxM: {
    control: {
      type: string;
    };
  };
  sxMaxWidth: {
    control: {
      type: string;
    };
  };
  sxMinWidth: {
    control: {
      type: string;
    };
  };
  sxP: {
    control: {
      type: string;
    };
  };
  sxWidth: {
    control: {
      type: string;
    };
  };
};
export declare function createSxArgTypes(
  omit?: string[]
): Record<string, Record<string, any>>;
export declare type Args = any;
