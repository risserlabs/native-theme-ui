/**
 * File: /babel.config.js
 * Project: @native-theme-ui/core
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 30-06-2022 11:10:44
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

module.exports = (api) => {
  const platform =
    process.argv.join(" ").indexOf("expo-cli") > -1 ||
    process.argv.join(" ").indexOf("jest-worker") > -1
      ? "STORYBOOK_EXPO"
      : process.argv.join(" ").indexOf("@storybook/react-native-server") > -1
      ? "STORYBOOK_NATIVE"
      : process.argv.join(" ").indexOf("babel") > -1
      ? "BABEL_BUILD"
      : null;
  api.cache(true);
  return {
    presets: [
      ...(platform === "BABEL_BUILD"
        ? [
            "@babel/preset-typescript",
            "@babel/preset-flow",
            "@babel/preset-react",
          ]
        : ["babel-preset-expo"]),
    ],
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
    env: {
      development: {
        plugins: [
          ...(platform ? [] : ["babel-plugin-typescript-to-proptypes"]),
        ],
      },
      production: {
        plugins: [
          [
            "transform-react-remove-prop-types",
            {
              mode: "remove",
              ignoreFilenames: ["node_modules"],
            },
          ],
        ],
      },
      esm: {
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: 3,
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              targets: {
                node: "6",
                browsers: [
                  "ie >= 11",
                  "last 3 chrome major versions",
                  "last 3 chromeandroid major versions",
                  "last 3 edge major versions",
                  "last 3 firefox major versions",
                  "last 3 ios major versions",
                  "last 3 safari major versions",
                ],
              },
            },
          ],
        ],
        ignore: [
          "**/*.d.ts",
          "**/*.d.tsx",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "**/*.stories.js",
          "**/*.stories.jsx",
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/@types",
        ],
      },
      umd: {
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: 3,
              modules: "umd",
              spec: true,
              useBuiltIns: "usage",
              targets: {
                node: "6",
                browsers: [
                  "ie >= 11",
                  "last 3 chrome major versions",
                  "last 3 chromeandroid major versions",
                  "last 3 edge major versions",
                  "last 3 firefox major versions",
                  "last 3 ios major versions",
                  "last 3 safari major versions",
                ],
              },
            },
          ],
        ],
        ignore: [
          "**/*.d.ts",
          "**/*.d.tsx",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "**/*.stories.js",
          "**/*.stories.jsx",
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/@types",
        ],
      },
    },
  };
};
