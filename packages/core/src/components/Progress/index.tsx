/**
 * File: /src/components/Progress/index.tsx
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
import Box from "../Box";
import { SxProp, Sx, View } from "dripsy";
import { DripsyFC, DViewProps } from "../../dripsyHelper";

export type ProgressProps = Omit<
  DViewProps,
  | "p"
  | "pb"
  | "pl"
  | "pr"
  | "pt"
  | "padding"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "paddingTop"
> & {
  max?: number;
  value?: number;
};

const Progress: DripsyFC<ProgressProps> = (props: ProgressProps) => {
  const max = props.max || 100;
  const value = props.value || 0;

  const sx = {
    ...Progress.defaultSx,
    ...props.sx,
  };

  const sxMax: SxProp = {
    ...sx,
  };

  const sxValue: SxProp = {
    ...sx,
    bg: (sx as Sx).color as string,
    width: `${Math.max(Math.min(value / max, 1), 0) * 100}%`,
  };

  delete sxMax.color;
  delete sxMax.p;
  delete sxMax.padding;
  delete sxMax.paddingBottom;
  delete sxMax.paddingLeft;
  delete sxMax.paddingRight;
  delete sxMax.paddingTop;
  delete sxMax.pb;
  delete sxMax.pl;
  delete sxMax.pr;
  delete sxMax.pt;
  delete sxValue.p;
  delete sxValue.padding;
  delete sxValue.paddingBottom;
  delete sxValue.paddingLeft;
  delete sxValue.paddingRight;
  delete sxValue.paddingTop;
  delete sxValue.pb;
  delete sxValue.pl;
  delete sxValue.pr;
  delete sxValue.pt;
  delete sxValue.color;
  delete sxValue.m;
  delete sxValue.margin;
  delete sxValue.marginBottom;
  delete sxValue.marginLeft;
  delete sxValue.marginRight;
  delete sxValue.marginTop;
  delete sxValue.mb;
  delete sxValue.ml;
  delete sxValue.mr;
  delete sxValue.mt;

  return (
    <Box variant="styles.progress" sx={sxMax}>
      <View sx={sxValue} />
    </Box>
  );
};

Progress.defaultProps = {};

Progress.defaultSx = {
  display: "flex",
  height: "5px",
  margin: 0,
  marginRight: "20px",
  padding: 0,
  bg: "gray",
  overflow: "hidden",
  color: "primary",
  borderRadius: 9999,
  border: "none",
  // '&::-webkit-progress-bar': {
  //   bg: 'transparent'
  // },
  // '&::-webkit-progress-value': {
  //   bg: 'currentcolor'
  // },
  // '&::-moz-progress-bar': {
  //   bg: 'currentcolor'
  // }
};

export default Progress;
