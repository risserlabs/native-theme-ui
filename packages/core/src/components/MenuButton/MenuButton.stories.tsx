/**
 * File: /src/components/MenuButton/MenuButton.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 19-06-2022 06:50:53
 * Author: K S R P BHUSHAN
 * -----
 * Last Modified: 30-06-2022 10:04:07
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
import { storiesOf } from "../../../storybook";
import MenuButton from "./index";

storiesOf("MenuButton", module)
  .add("with green color", () => (
    <MenuButton sx={{ backgroundColor: "green" }} />
  ))
  .add("with blue color", () => (
    <MenuButton sx={{ backgroundColor: "blue" }} />
  ));
