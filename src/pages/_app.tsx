/**
 * File: /src/pages/_app.tsx
 * Project: multiverse-example
 * File Created: 25-09-2021 18:46:51
 * Author: Clay Risser
 * -----
 * Last Modified: 25-09-2021 20:52:32
 * Modified By: Clay Risser
 * -----
 * BitSpur Inc (c) Copyright 2021
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

import 'setimmediate';
import React, { FC, ReactElement } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from '~/store';

const store = createStore();

export interface AppProps {
  Component: FC<any>;
  pageProps: Record<string, any>;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  function renderReduxProvider(children: ReactElement) {
    if (!store) return children;
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
  }
  return renderReduxProvider(<Component {...pageProps} />);
};

App.defaultProps = {
  Component: (f) => f,
  pageProps: {}
};

export default App;
