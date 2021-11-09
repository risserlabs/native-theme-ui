/**
 * File: /vscode/extension.ts
 * Project: multiverse-example
 * File Created: 08-11-2021 19:49:41
 * Author: Clay Risser
 * -----
 * Last Modified: 09-11-2021 00:25:56
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

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "multiverse-example" is now active in the web extension host!'
  );
  let disposable = vscode.commands.registerCommand(
    'multiverse-example.helloWorld',
    () => {
      vscode.window.showInformationMessage(
        'Hello World from multiverse-example in a web extension host!'
      );
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
