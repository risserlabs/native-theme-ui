/**
 * File: /src/components/Heading/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 18-08-2022 00:26:44
 * Modified By: Harikittu46
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
import { styled, SxProp } from "dripsy";
import Text from "../Text";
import { H1, H2, H3, H4, H5, H6 } from "dripsy";
import Box, { BoxProps } from "../Box";
import { TextProps as RNTextProps } from "react-native";
import useThemeLookup from "../../hooks/useThemeLookup";
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { DripsyFC, PatchStyledProps } from "../../dripsyHelper";

type variant = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export interface DHeadingProps extends RNTextProps {
  sx: SxProp | undefined;
  as: variant;
}

export type HeadingProps = RNTextProps & {
  autoContrast?: AutoContrast;
  sx?: SxProp;
  as?: variant;
};

const Heading: FC<HeadingProps> = (props: HeadingProps) => {
  // const themeLookup = useThemeLookup();
  // const sx: SxProp = {
  // ...themeLookup('styles', as),
  //   ...styles.heading,
  // ...props.sx

  const sx = useAutoContrast(props, {
    ...props.sx,
  });

  const StyledBox = styled(Box, {
    themeKey: "text",
    defaultVariant: "heading",
  })({});

  const styledBoxProps = { ...props };
  delete styledBoxProps.autoContrast;
  return (
    <StyledBox
      themeKey="text"
      variant="heading"
      {...(styledBoxProps as PatchStyledProps<BoxProps>)}
      sx={sx}
    />
  );
};

Heading.defaultProps = {};

const defaultSx = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
};

export default Heading;
