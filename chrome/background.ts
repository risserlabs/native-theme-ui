/**
 * File: /chrome/background.ts
 * Project: multiverse-example
 * File Created: 09-11-2021 01:28:48
 * Author: Clay Risser
 * -----
 * Last Modified: 09-11-2021 01:33:03
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

import { Message, Port, Ports } from './types';

const tabPorts: Ports = {};

export function registerBackground() {
  chrome.runtime.onConnect.addListener((backgroundPort: Port) => {
    function handleMessage(message: Message, clientPort: Port) {
      if (message.action === 'registerTab') {
        if (
          clientPort.sender?.tab?.id &&
          !(clientPort.sender.tab.id.toString() in tabPorts)
        ) {
          tabPorts[clientPort.sender.tab.id.toString()] = clientPort;
        }
        return;
      }
      if (typeof message.action === 'undefined') return;
      const tabId = message.tabId || clientPort.sender?.tab?.id;
      if (typeof message.tabId === 'undefined') return;
      return tabPorts[tabId?.toString() || '']?.postMessage(message);
    }
    backgroundPort.onMessage.addListener(handleMessage);
    backgroundPort.onDisconnect.addListener((port: Port) => {
      port.onMessage.removeListener(handleMessage);
      Object.keys(tabPorts).forEach((tabIdString: string) => {
        if (tabPorts[tabIdString] == port) delete tabPorts[tabIdString];
      });
    });
  });
}

registerBackground();
