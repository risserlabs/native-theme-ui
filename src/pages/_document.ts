/**
 * File: /src/pages/_document.ts
 * Project: multiverse-example
 * File Created: 08-11-2021 06:27:23
 * Author: Clay Risser
 * -----
 * Last Modified: 08-11-2021 22:02:58
 * Modified By: Clay Risser
 * -----
 * BitSpur, Inc. (c) Copyright 2021
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

import React from 'react';
import { Document, getInitialProps } from '@expo/next-adapter/document';
import { flush } from 'react-native-media-query';

export default class WebDocument extends Document {
  static getInitialProps: typeof getInitialProps = async ({ renderPage }) => {
    const initialProps = await getInitialProps({ renderPage });
    const styles = [initialProps.styles, flush()];
    return { ...initialProps, styles: React.Children.toArray(styles) };
  };
}
