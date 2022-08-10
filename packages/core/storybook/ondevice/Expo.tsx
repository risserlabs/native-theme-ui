/**
 * File: /storybook/ondevice/Expo.tsx
 * Project: @native-theme-ui/core
 * File Created: 02-07-2022 12:47:49
 * Author: Clay Risser
 * -----
 * Last Modified: 10-08-2022 06:16:12
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

import * as SplashScreen from "expo-splash-screen";
import React, { FC, useEffect } from "react";
import { Platform, View, StatusBar as RNStatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getStorybookUI } from "@storybook/react-native";
import { useFonts } from "expo-font";
import "./storybook.requires";
import fonts from "../fonts";

const logger = console;
SplashScreen.preventAutoHideAsync().catch(logger.error);
const StorybookUI = getStorybookUI({
  host: Platform.OS === "android" ? "10.0.2.2" : "0.0.0.0",
});

const Expo: FC<unknown> = () => {
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  if (Platform.OS === "android") {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={{ height: RNStatusBar.currentHeight }} />
        <StorybookUI />
      </View>
    );
  }
  return <StorybookUI />;
};

export default Expo;
