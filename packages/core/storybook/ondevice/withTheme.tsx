/**
 * File: /storybook/ondevice/withTheme.tsx
 * Project: @native-theme-ui/core
 * File Created: 02-07-2022 13:20:19
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 11:08:45
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

import React, { ReactNode } from "react";
import { DripsyProvider } from "dripsy";
import { makeDecorator, LegacyStoryFn, StoryWrapper } from "@storybook/addons";
import * as themes from "../../theme";

const withTheme = makeDecorator({
  name: "withTheme",
  parameterName: "theme",
  skipIfNoParametersOrOptions: false,
  wrapper: ((
    getStory: LegacyStoryFn<ReactNode>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any
  ) => {
    return (
      <DripsyProvider theme={themes.main as never}>
        {getStory(context)}
      </DripsyProvider>
    );
  }) as StoryWrapper,
});

export default withTheme;
