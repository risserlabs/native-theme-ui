import vscode from 'vscode';
import pkg from '-/pkg';
import Commands from './commands';
import {
  DocumentContentProvider as Multiplatform FrameworkDocumentContentProvider,
  EditorProvider as Multiplatform FrameworkEditorProvider
} from './views/multiplatform-framework';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    Multiplatform FrameworkDocumentContentProvider.register(context)
  );
  context.subscriptions.push(Multiplatform FrameworkEditorProvider.register(context));

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
