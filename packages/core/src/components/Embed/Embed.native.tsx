/**
 * File: /src/components/Embed/Embed.native.tsx
 * Project: @native-theme-ui/core
 * File Created: 18-07-2022 06:25:17
 * Author: Clay Risser
 * -----
 * Last Modified: 18-07-2022 07:59:05
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

import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { ResponsiveStyleValue } from "@theme-ui/css";
import Box from "../Box";
import WebViewThemed from "./WebViewThemed";
import YoutubeIframeThemed from "./YoutubeIframeThemed";
import { DripsyFC } from "../../dripsyHelper";
import { SizeDimension, useCalculateSize } from "./size";
import { splitProps, EmbedProps } from "./props";

const Embed: DripsyFC<EmbedProps> = (props: EmbedProps) => {
  const viewRef = useRef<View>(null);
  const [renderedSize, setRenderedSize] = useState<
    [number | null, number | null]
  >([null, null]);
  const sx = {
    ...(props.height ? { height: props.height } : {}),
    ...(props.width ? { width: props.width } : {}),
    border: props.frameBorder,
    ...Embed.defaultSx,
    ...props.sx,
  };
  sx.width =
    useCalculateSize(
      sx.width as ResponsiveStyleValue<number | string>,
      sx.height as ResponsiveStyleValue<number | string>,
      props.ratio,
      SizeDimension.Width
    ) || renderedSize[0];
  sx.height = useCalculateSize(
    sx.height as ResponsiveStyleValue<number | string>,
    sx.width,
    props.ratio,
    SizeDimension.Height
  );
  const { baseProps, iframeProps } = splitProps(props, sx);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.measure(
      (_x: number, _y: number, width: number, height: number) => {
        setRenderedSize([width, height]);
      }
    );
  }, []);

  const youtubeVideoId =
    (typeof props.src === "string" &&
      (props.src.indexOf("youtube.com/") > -1 ||
        props.src.indexOf("youtu.be/") > -1) &&
      Array.from(props.src.match(/[^/]+$/g) || [])
        .join("")
        .trim()) ||
    null;

  function renderWebView() {
    if (!props.src) return [];
    if (youtubeVideoId) {
      const youtubeIframeThemedProps = { ...props };
      delete youtubeIframeThemedProps.src;
      return (
        <YoutubeIframeThemed
          initialPlayerParams={{
            ...(typeof iframeProps.allowFullScreen === "boolean"
              ? { preventFullScreen: !iframeProps.allowFullScreen }
              : {}),
          }}
          defaultHeight={400}
          videoId={youtubeVideoId}
          useLocalHTML
          sx={{
            width: sx.width,
            height: sx.height,
          }}
        />
      );
    }
    return (
      <Box
        sx={{
          height: sx.height,
          width: sx.width || (!sx.height ? "50%" : sx.width),
        }}
      >
        <WebViewThemed
          source={{ uri: props.src }}
          originWhitelist={["*"]}
          sx={{
            width: sx.width,
            height: sx.height,
          }}
        />
      </Box>
    );
  }

  return (
    <View ref={viewRef}>
      <Box
        {...baseProps}
        sx={{
          ...sx,
          height: sx.height,
          width: sx.width || (!sx.height ? "100%" : sx.width),
        }}
      >
        {renderWebView()}
      </Box>
    </View>
  );
};

Embed.defaultProps = {
  ratio: 16 / 9,
};

Embed.defaultSx = {};

export default Embed;
