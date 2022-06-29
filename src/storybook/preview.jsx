/**
 * File: /storybook/preview.jsx
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 28-06-2022 06:33:27
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
import { addDecorator } from "@storybook/react";
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
      console.log("theme", theme);
    },
    list: Object.entries(themes).map(([name, theme]) => ({
      name,
      themeUI: theme,
      color: theme.colors.primary,
    })),
    Decorator: (props) => (
      <DripsyProvider theme={props.theme.themeUI}>
        {props.children}
      </DripsyProvider>
    ),
  },
};

export const loaders = [];

const withDisplayGlobals = withGlobals((Story, _globalValues) => <Story />);

addDecorator(withDesign);
addDecorator(withDisplayGlobals);
addDecorator(withThemes);

export const globalTypes = {
  boolean: {
    name: "Boolean",
    description: "Boolean Description",
    defaultValue: true,
    control: { type: "boolean" },
  },
};
