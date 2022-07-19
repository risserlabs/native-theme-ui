/**
 * File: /src/components/Embed/YoutubeIframeStyled.tsx
 * Project: @native-theme-ui/core
 * File Created: 18-07-2022 08:05:40
 * Author: Clay Risser
 * -----
 * Last Modified: 18-07-2022 08:06:05
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

import { createThemedComponent, SxProp } from "@dripsy/core";
import React, { FC } from "react";
import YoutubeIframe, { YoutubeIframeProps } from "react-native-youtube-iframe";

type YoutubeIframeStyledProps = Omit<
  YoutubeIframeProps,
  "width" | "height" | "webViewStyle"
> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  defaultHeight: number;
};

const YoutubeIframeStyled: FC<YoutubeIframeStyledProps> = (
  props: YoutubeIframeStyledProps
) => {
  const webViewStyle = { ...props.style };
  delete webViewStyle.width;
  delete webViewStyle.height;
  return (
    <YoutubeIframe
      {...props}
      height={props.style?.height || props.defaultHeight}
      width={props.style?.width}
      webViewStyle={props.style}
    />
  );
};

export type YoutubeIframeThemedProps = YoutubeIframeStyledProps & {
  sx?: SxProp;
};

const YoutubeIframeThemed = createThemedComponent(YoutubeIframeStyled);

export default YoutubeIframeThemed;
