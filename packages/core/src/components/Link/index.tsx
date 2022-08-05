/**
 * File: /src/components/Link/index.tsx
 * Project: @native-theme-ui/core
 * File Created: 22-06-2022 14:33:38
 * Author: Ajithkrm6
 * -----
 * Last Modified: 05-08-2022 01:03:12
 * Modified By: Ajith Kumar
 * ----- except in
 * Risser Labs LLC (c) Copyright 2021 - 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file compliance with the License.
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
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { A as DA } from "@dripsy/core";
import { DAProps, DripsyFC } from "../../dripsyHelper";
import { styles } from "../Pressable";

export type LinkProps = Partial<DAProps> & {
  autoContrast?: AutoContrast;
  hidden?: boolean;
};

const Link: DripsyFC<LinkProps> = (props: LinkProps) => {
  const sx = useAutoContrast(props, {
    ...Link.defaultSx,
    ...props.sx,
  });
  return (
    <DA
      themeKey={"links" as unknown as any}
      variant={"styles.a" as unknown as any}
      {...(props as DAProps)}
      sx={sx}
    />
  );
};

Link.defaultProps = {};

Link.defaultSx = {
  // color: "inherit",
  fontWeight: "bold",
  display: "flex",
  //'&:hover, &:focus, &.active': {
  //color: 'primary',
  //};
};
export default Link;
