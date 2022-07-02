/**
 * File: /storybook/main.js
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 02-07-2022 14:28:59
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

const babelConfig = {
  presets: [],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "babel-plugin-macros",
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-runtime",
  ],
};

module.exports = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx|md|mdx)"],
  logLevel: "debug",
  addons: [
    "@etchteam/storybook-addon-status",
    "@luigiminardim/storybook-addon-globals-controls",
    "@pbutlewski/storybook-html",
    "@storybook/addon-a11y",
    "@storybook/addon-ie11",
    "@storybook/addon-links",
    "@storybook/addon-storyshots",
    "@storybook/addon-storysource",
    "addon-screen-reader",
    "storybook-addon-breakpoints",
    "storybook-addon-grid",
    "storybook-addon-paddings",
    "storybook-addon-themes",
    "storybook-color-picker",
    "storybook-dark-mode",
    "storybook-mobile",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        babelPlugins: babelConfig.plugins,
        modulesToTranspile: [
          "dripsy",
          "@dripsy/core",
          "react-native-swipe-gestures",
        ],
      },
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: true,
        toolbars: true,
        viewport: true,
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {},
  },
  core: {
    builder: "webpack5",
  },
  features: {
    buildStoriesJson: false,
    postcss: false,
    storyStoreV7: false,
  },
  webpackFinal: (webpackConfig) => {
    patchBabel(webpackConfig, {
      ...babelConfig,
      plugins: [...(babelConfig.plugins || [])],
    });
    return { ...webpackConfig };
  },
};

function patchBabel(webpackConfig, babelConfig) {
  webpackConfig.module.rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((item) => {
        if (item.loader?.indexOf("babel-loader") > -1) {
          const plugins = [...(babelConfig.plugins || [])];
          const presets = [...(babelConfig.presets || [])];
          const pluginsSet = new Set(
            plugins.map((plugin) =>
              require.resolve(Array.isArray(plugin) ? plugin[0] : plugin)
            )
          );
          const presetsSet = new Set(
            presets.map((preset) =>
              require.resolve(Array.isArray(preset) ? preset[0] : preset)
            )
          );
          (item.options.plugins || []).forEach((plugin) => {
            if (
              !pluginsSet.has(
                require.resolve(Array.isArray(plugin) ? plugin[0] : plugin)
              )
            ) {
              plugins.push(plugin);
            }
          });
          (item.options.presets || []).forEach((preset) => {
            if (
              !presetsSet.has(
                require.resolve(Array.isArray(preset) ? preset[0] : preset)
              )
            ) {
              presets.push(preset);
            }
          });
          item.options = {
            ...item.options,
            ...babelConfig,
            plugins,
            presets,
          };
        }
      });
    }
  });
}
