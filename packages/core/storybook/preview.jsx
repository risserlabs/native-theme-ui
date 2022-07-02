/**
 * File: /storybook/preview.jsx
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 02-07-2022 14:27:13
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

import React from "react";
import { DripsyProvider } from "dripsy";
import { themes as storybookThemes } from "@storybook/theming";
import { withDesign } from "storybook-addon-designs";
import { withGlobals } from "@luigiminardim/storybook-addon-globals-controls";
import { withThemes } from "storybook-addon-themes/react";
import * as themes from "../themes";

export const parameters = {
  globalsControls: {},
  status: {
    statuses: {},
  },
  darkMode: {
    dark: { ...storybookThemes.dark },
    light: { ...storybookThemes.normal },
  },
  paddings: {
    default: "Small",
  },
  themes: {
    default: "main",
    clearable: false,
    onChange: (theme) => {
      console.info("theme", theme);
    },
    list: Object.entries(themes).map(([name, theme]) => ({
      name,
      themeUI: theme,
      color: theme.colors.primary,
    })),
    Decorator: (props) => (
      // eslint-disable-next-line react/prop-types
      <DripsyProvider theme={props.theme.themeUI}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </DripsyProvider>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

export const decorators = [withDesign, withDisplayGlobals, withThemes];

export const globalTypes = {
  boolean: {
    name: "Boolean",
    description: "Boolean Description",
    defaultValue: true,
    control: { type: "boolean" },
  },
};
