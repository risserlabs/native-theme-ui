import vscode from 'vscode';

export default class WebviewCollection {
  private readonly _webviews = new Set<{
    readonly resource: string;
    readonly webviewPanel: vscode.WebviewPanel;
  }>();

  public *get(uri: vscode.Uri): Iterable<vscode.WebviewPanel> {
    const key = uri.toString();
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(this._webviews)) {
      if (entry.resource === key) {
        yield entry.webviewPanel;
      }
    }
  }

  public add(uri: vscode.Uri, webviewPanel: vscode.WebviewPanel) {
    const entry = { resource: uri.toString(), webviewPanel };
    this._webviews.add(entry);
    webviewPanel.onDidDispose(() => {
      this._webviews.delete(entry);
    });
  }
}
