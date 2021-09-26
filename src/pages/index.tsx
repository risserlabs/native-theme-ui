/**
 * File: /src/pages/index.tsx
 * Project: multiverse-example
 * File Created: 25-09-2021 19:16:52
 * Author: Clay Risser
 * -----
 * Last Modified: 25-09-2021 20:01:04
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

import React from 'react';
import Head from 'next/head';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Example</title>
      </Head>
      <div>
        <p>Hello, world!</p>
      </div>
    </React.Fragment>
  );
}

export default Home;
