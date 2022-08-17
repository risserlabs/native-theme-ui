/**
 * File: /src/components/Textarea/Textarea.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
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

import React from "react";
import { View } from "dripsy";
import Textarea from ".";
import Text from "../Text";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  autoContrastArgType,
} from "../../../storybook";

export default {
  title: "components/forms/Textarea",
  component: Textarea,
  parameters: {
    status: { type: "beta" },
  },
};

export const textarea = createArgsStory(Textarea);
textarea.args = {
  children: "I am a Text",
  autoContrast: Textarea.defaultProps?.autoContrast,
  ...createSxArgs(Textarea),
};
textarea.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const likeThemeUi = () => (
  <Textarea
    sx={{
      p: 2,
      color: "white",
      bg: "primary",
    }}
  >
    <Text>Beep</Text>
  </Textarea>
);

export const multiple = () => {
  const style = {
    textarea: {
      color: "white",
      height: 200,
      width: 200,
      margin: 4,
    },
    textarea1: {
      bg: "primary",
    },
    textarea2: {
      bg: "secondary",
    },
  };
  return (
    <View sx={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <Textarea
        sx={{
          ...style.textarea,
          ...style.textarea1,
        }}
      />
      <Textarea
        sx={{
          ...style.textarea,
          ...style.textarea2,
        }}
      />
      <Textarea
        sx={{
          ...style.textarea,
          ...style.textarea1,
        }}
      />
      <Textarea
        sx={{
          ...style.textarea,
          ...style.textarea2,
        }}
      />
    </View>
  );
};
