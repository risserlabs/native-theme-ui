/**
 * File: /src/components/Forms/Forms.stories.tsx
 * Project: @native-theme-ui/core
 * File Created: 21-06-2022 02:17:52
 * Author: Harikittu46
 * -----
 * Last Modified: 30-06-2022 10:04:13
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
import Forms from "./index";

storiesOf("Forms", module).add("with background", () => <Forms></Forms>);
