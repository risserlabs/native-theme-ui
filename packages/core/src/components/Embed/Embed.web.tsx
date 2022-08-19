/**
 * File: /src/components/Embed/Embed.web.tsx
 * Project: @native-theme-ui/core
 * File Created: 18-07-2022 06:25:17
 * Author: Clay Risser
 * -----
 * Last Modified: 18-08-2022 01:15:17
 * Modified By: Manikanta
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

import React, { FC } from "react";
import { ResponsiveStyleValue } from "@theme-ui/css";
import Box from "../Box";
//import { DripsyFC } from "../../dripsyHelper";
import { SizeDimension, useCalculateSize } from "./size";
import { splitProps, EmbedProps } from "./props";

const Embed: FC<EmbedProps> = (props: EmbedProps) => {
  const sx = {
    ...(props.height ? { height: props.height } : {}),
    ...(props.width ? { width: props.width } : {}),
    border: props.frameBorder,

    ...props.sx,
  };
  sx.height = useCalculateSize(
    sx.height as ResponsiveStyleValue<number | string>,
    sx.width as ResponsiveStyleValue<number | string>,
    props.ratio,
    SizeDimension.Height
  );
  sx.width = useCalculateSize(
    sx.width as ResponsiveStyleValue<number | string>,
    sx.height,
    props.ratio,
    SizeDimension.Width
  );

  const { baseProps, iframeProps } = splitProps(props, sx);
  return (
    <Box {...baseProps} sx={sx}>
      <iframe
        {...iframeProps}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          border: 0,
        }}
      ></iframe>
    </Box>
  );
};

Embed.defaultProps = {};

const defaultSx = {
  // width: "100%",
  position: "relative",
  overflow: "hidden",
};

export default Embed;
