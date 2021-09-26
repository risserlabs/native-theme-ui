/**
 * File: /src/store/spec.ts
 * Project: multiverse-example
 * File Created: 25-09-2021 18:49:44
 * Author: Clay Risser
 * -----
 * Last Modified: 25-09-2021 20:00:51
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

import { createStore } from '.';

describe('createStore()', () => {
  it('should create store', async () => {
    const store = createStore(
      {},
      { deleteMe: null } as any,
      { deleteMe: () => null } as any
    )!;
    expect(typeof store.dispatch).toBe('function');
    expect(typeof store.getState).toBe('function');
    expect(typeof store.replaceReducer).toBe('function');
    expect(typeof store.subscribe).toBe('function');
  });
});
