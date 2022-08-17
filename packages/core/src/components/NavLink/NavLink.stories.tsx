/**
 * File: /src/components/NavLink/NavLink.stories.tsx
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
import Box from "../Box";
import Link from ".";
import {
  createArgsStory,
  createSxArgs,
  sxArgTypes,
  Args,
  autoContrastArgType,
} from "../../../storybook";
import NavLink from ".";

export default {
  title: "components/links/NavLink",
  component: NavLink,
  parameters: {
    status: { type: "beta" },
  },
};

export const navLink = createArgsStory(NavLink);
navLink.args = {
  children: "I am a NavLink",
  href: "https://theme-ui.com/components/nav-link",
  autoContrast: NavLink.defaultProps?.autoContrast,
  ...createSxArgs(),
};
navLink.argTypes = {
  ...autoContrastArgType,
  ...sxArgTypes,
};

export const withBackground = (args: Args) => (
  <Box sx={{ bg: args.background, p: 4 }}>
    <Link
      autoContrast={args.autoContrast}
      href="https://theme-ui.com/components/nav-link"
    >
      Hello, world!
    </Link>
  </Box>
);

withBackground.args = {
  autoContrast: "AAA",
  background: "black",
};
withBackground.argTypes = {
  ...autoContrastArgType,
  background: { control: { type: "color" } },
};

// storiesOf("NavLink", module)
//   .add(
//     "default",
//     () => (
//       <Link href="https://theme-ui.com/components/link">Hello, world!</Link>
//     ),
//     {
//       component: Link,
//       status: { type: "beta" },
//     }
//   )

//   .add(
//     "with background",
//     () => (
//       <Box sx={{ bg: "background", p: 4 }}>
//         <Link href="https://theme-ui.com/components/link">Hello, world!</Link>
//       </Box>
//     ),
//     {
//       component: Link,
//       status: { type: "beta" },
//     }
//   );
