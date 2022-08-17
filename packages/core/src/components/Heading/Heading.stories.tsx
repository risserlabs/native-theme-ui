/**
 * File: /src/components/Heading/Heading.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 10:43:00
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
import Box from "../Box";
import Heading from "./index";
import Text from "../Text";
import {
  Args,
  autoContrastArgType,
  createArgsStory,
  createSxArgs,
  sxArgTypes,
} from "../../../storybook";
import { autoContrast } from "@risserlabs/auto-contrast/lib/hooks/useColor";
import { variant } from "../Variant/Variant.stories";

export default {
  title: "components/text/Heading",
  component: Heading,
  parameters: {
    status: { type: "beta" },
  },
};

export const heading = createArgsStory(Heading);

heading.args = {
  children: "Heading!",
  ...createSxArgs(),
};

heading.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const withBackground = (args: Args) => (
  <Box sx={{ bg: "background", p: 4 }}>
    <Heading sx={{ bg: args.background }}>Hello Heading!</Heading>
  </Box>
);

withBackground.args = {
  background: "red",
  autoContrast: "AAA",
};
withBackground.argTypes = {
  background: { control: { type: "color" } },
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
};
export const headingVariants = () => {
  switch (variant) {
    case "H2":
      return (
        <Heading as="H2" sx={{ color: "primary", lineHeight: 29 }}>
          Heading2
        </Heading>
      );

    case "H3":
      return (
        <Heading as="H3" sx={{ color: "primary", lineHeight: 27 }}>
          Heading3
        </Heading>
      );

    case "H4":
      return (
        <Heading as="H4" sx={{ color: "primary", lineHeight: 25 }}>
          Heading4
        </Heading>
      );

    case "H5":
      return (
        <Heading as="H5" sx={{ color: "primary", lineHeight: 20 }}>
          Heading5
        </Heading>
      );

    case "H6":
      return (
        <Heading as="H6" sx={{ color: "primary", lineHeight: 20 }}>
          Heading6
        </Heading>
      );

    default:
      return (
        <Heading as="H1" sx={{ color: "primary", lineHeight: 30 }}>
          Default heading (H1)
        </Heading>
      );
  }
};

headingVariants.args = {
  autoContrast: {
    options: ["A", "AA", "AAA", false],
    control: { type: "select" },
  },
};

headingVariants.argTypes = {
  variant: { control: { type: "select" } },
  options: ["H2", "H3", "H4", "H5", "H6", false],
};
