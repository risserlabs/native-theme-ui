import vscode from 'vscode';
import pkg from '-/pkg';
import Commands from './commands';
import {
  DocumentContentProvider as MultiverseDocumentContentProvider,
  EditorProvider as MultiverseEditorProvider
} from './views/multiverse';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    MultiverseDocumentContentProvider.register(context)
  );
  context.subscriptions.push(MultiverseEditorProvider.register(context));

  const commands = new Commands(context);
  Object.getOwnPropertyNames(Object.getPrototypeOf(commands)).forEach(
    (commandName: string) => {
      if (
        commandName.length &&
        commandName[0] !== '_' &&
        commandName[0].toLowerCase() === commandName[0] &&
        // @ts-ignore
        typeof commands[commandName] === 'function'
      ) {
        context.subscriptions.push(
          vscode.commands.registerCommand(
            `${pkg.name}.${commandName}`,
            async (...args: any[]) => {
              // @ts-ignore
              await commands[commandName](...args);
            }
          )
        );
      }
    }
  );
}

export function deactivate() {
  return null;
}
