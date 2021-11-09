/**
 * File: /App.tsx
 * Project: multiverse-example
 * File Created: 08-11-2021 02:31:35
 * Author: Clay Risser
 * -----
 * Last Modified: 08-11-2021 22:01:57
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

import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import App from './src/App';

export interface ExpoAppProps {}

const ExpoApp: FC<ExpoAppProps> = (_props: ExpoAppProps) => (
  <View style={styles.container}>
    <App />
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ExpoApp;
