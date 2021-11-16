import vscode from 'vscode';
import { protocol } from '.';

export default class DocumentContentProvider
  implements vscode.TextDocumentContentProvider
{
  constructor(private readonly _context: vscode.ExtensionContext) {}

  static register(context: vscode.ExtensionContext) {
    return vscode.workspace.registerTextDocumentContentProvider(
      protocol,
      new DocumentContentProvider(context)
    );
  }

  provideTextDocumentContent(uri: vscode.Uri): string {
    return `${Buffer.from(
      new URLSearchParams(uri.query).toString(),
      'base64'
    ).toString()}
`;
  }

  static async openFile(filename: string, content: string) {
    const uri = vscode.Uri.parse(
      `${protocol}:${filename}?content=${Buffer.from(content).toString(
        'base64'
      )}`
    );
    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc, { preview: false });
  }
}
