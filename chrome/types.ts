/**
 * File: /chrome/types.ts
 * Project: multiverse-example
 * File Created: 09-11-2021 01:28:59
 * Author: Clay Risser
 * -----
 * Last Modified: 09-11-2021 01:29:14
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

export type ExtensionPanel = chrome.devtools.panels.ExtensionPanel;

export type DevtoolsNetworkRequest = chrome.devtools.network.Request;

export interface RequestRow {
  requestData: string;
  responseData: string;
  routingKey: string;
  status: number;
  url: string;
}

export interface Ports {
  [key: string]: Port;
}

export interface Message {
  action: string;
  args?: any[];
  tabId?: number;
  [key: string]: any;
}

export type Port = chrome.runtime.Port;

export type Action = (...args: any[]) => any;

export interface Actions {
  [key: string]: Action;
}
