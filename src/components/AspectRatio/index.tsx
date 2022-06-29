/**
 * File: /components/AspectRatio/index.tsx
 * Project: -
 * File Created: 27-06-2022 03:42:37
 * Author: Harikittu46
 * -----
 * Last Modified: 28-06-2022 06:19:00
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

import React, { FC } from "react";
import { AutoContrast } from "@risserlabs/auto-contrast";

type AspectRatioProps = {
  autoContrast?: AutoContrast;
};
const AspectRatio: FC<AspectRatioProps> = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      AspectRatio component
    </div>
  );
};

export default AspectRatio;
