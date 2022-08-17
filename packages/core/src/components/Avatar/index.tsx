/**
 * File: /src/components/Avatar/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 07:55:02
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
import React, { FC, ComponentProps } from "react";
import { createThemedComponent } from "dripsy";
import Box from "../Box";

const ThemedBox = createThemedComponent(Box, {
  themeKey: "images",
  defaultVariant: "avatar",
  defaultStyle: {
    alignItems: "center",
    bg: "primary",
    border: 0,
    borderColor: "primary",
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    maxWidth: "100%",
    overflow: "hidden",
    width: 50,
  },
});

export type AvatarProps = ComponentProps<typeof ThemedBox> & {
  isImage?: boolean;
  name?: string;
  uri?: string;
  source?: string;
};

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  return <ThemedBox {...props}>{props.children}</ThemedBox>;
};

Avatar.defaultProps = {
  sx: {},
  isImage: false,
  name: "",
  uri: "",
};

export default Avatar;
