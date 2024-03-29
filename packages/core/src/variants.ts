/**
 * File: /themes/variants.ts
 * Project: @native-theme-ui/core
 * File Created: 28-06-2022 07:42:41
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 10:23:18
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

import { DripsyFinalTheme } from "dripsy";

const variants: Partial<DripsyFinalTheme> = {
  variants: {},
  images: {
    avatar: {},
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary",
    },
    muted: {
      color: "text",
      bg: "muted",
    },
  },
  buttons: {
    primary: {
      bg: "red",
    },
    close: {
      height: 200,
      width: 200,
    },
  },
};

export default variants;
