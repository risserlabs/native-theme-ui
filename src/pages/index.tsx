/**
 * File: /src/pages/index.tsx
 * Project: multiverse-example
 * File Created: 08-11-2021 05:48:39
 * Author: Clay Risser
 * -----
 * Last Modified: 08-11-2021 22:03:01
 * Modified By: Clay Risser
 * -----
 * BitSpur, Inc. (c) Copyright 2021
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

import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import App from '../App';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hello, multiverse!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
};

export default Home;
