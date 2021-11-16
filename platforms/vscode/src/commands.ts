import vscode from 'vscode';

export default class Commands {
  constructor(private _context: vscode.ExtensionContext) {}

  helloWorld() {
    vscode.window.showInformationMessage(
      'Hello World from multiverse in a web extension host!'
    );
  }
}
