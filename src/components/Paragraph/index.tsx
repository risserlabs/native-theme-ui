/**
 * File: /components/Paragraph/index.tsx
 * Project: -
 * File Created: 20-06-2022 05:48:50
 * Author: Clay Risser
 * -----
 * Last Modified: 23-06-2022 18:37:34
 * Modified By: Ajithkrm6
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
import { AutoContrast, useAutoContrast } from "@risserlabs/auto-contrast";
import { P as DP } from "dripsy";
import { DPProps, DripsyFC } from "../../dripsyHelper";

export type ParagraphProps = DPProps & {
  autoContrast?: AutoContrast;
};

const Paragraph: DripsyFC<ParagraphProps> = (props: ParagraphProps) => {
  const sx = useAutoContrast(props, {
    ...Paragraph.defaultSx,
    ...props.sx,
  });
  return <DP {...props} sx={sx} />;
};

Paragraph.defaultProps = {};

Paragraph.defaultSx = {
  fontFamily: "SofiaPro-Bold",
  fontWeight: "body",
  lineHeight: "body",
};

export default Paragraph;
