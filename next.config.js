/**
 * File: /next.config.js
 * Project: multiverse-example
 * File Created: 25-09-2021 18:08:58
 * Author: Clay Risser
 * -----
 * Last Modified: 25-09-2021 20:56:53
 * Modified By: Clay Risser
 * -----
 * BitSpur Inc (c) Copyright 2021
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

const withFonts = require('next-fonts');
const withImages = require('next-images');
const withOffline = require('next-offline');
const withPlugins = require('next-compose-plugins');
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')(['react-native-web']);

module.exports = withPlugins(
  [
    // withTM,
    // withOffline,
    // [withExpo, { projectRoot: __dirname }]
    // [withImages, { projectRoot: __dirname }]
    // [withFonts, { projectRoot: __dirname }]
  ],
  {
    assetPrefix: './',
    poweredByHeader: false,
    target: 'server',
    productionBrowserSourceMaps: true,
    devIndicators: { autoPrerender: false },
    webpack: (config) => {
      if (typeof isServer !== 'undefined' && !isServer) {
        config.target = 'electron-renderer';
      }
      if (!config.watchOptions) config.watchOptions = {};
      config.watchOptions.ignored = '**/.*';
      return config;
    }
  }
);
