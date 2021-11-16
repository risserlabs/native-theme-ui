import vscode from 'vscode';
import Document, { Edit } from './document';
import { disposeAll, getNonce, WebviewCollection } from '..';
import { protocol, extension } from '.';

export default class EditorProvider
  implements vscode.CustomEditorProvider<Document>
{
  private readonly webviews = new WebviewCollection();

  constructor(private readonly context: vscode.ExtensionContext) {}

  static readonly viewType = `${protocol}Edit.${extension}`;

  private readonly _onDidChangeCustomDocument = new vscode.EventEmitter<
    vscode.CustomDocumentEditEvent<Document>
  >();

  private _requestId = 1;

  private readonly _callbacks = new Map<number, (response: any) => void>();

  public readonly onDidChangeCustomDocument =
    this._onDidChangeCustomDocument.event;

  public static register(context: vscode.ExtensionContext): vscode.Disposable {
    return vscode.window.registerCustomEditorProvider(
      EditorProvider.viewType,
      new EditorProvider(context),
      {
        webviewOptions: {
          retainContextWhenHidden: false
        },
        supportsMultipleEditorsPerDocument: false
      }
    );
  }

  public saveCustomDocument(
    document: Document,
    cancellation: vscode.CancellationToken
  ): Thenable<void> {
    return document.save(cancellation);
  }

  public saveCustomDocumentAs(
    document: Document,
    destination: vscode.Uri,
    cancellation: vscode.CancellationToken
  ): Thenable<void> {
    return document.saveAs(destination, cancellation);
  }

  public revertCustomDocument(
    document: Document,
    cancellation: vscode.CancellationToken
  ): Thenable<void> {
    return document.revert(cancellation);
  }

  public backupCustomDocument(
    document: Document,
    context: vscode.CustomDocumentBackupContext,
    cancellation: vscode.CancellationToken
  ): Thenable<vscode.CustomDocumentBackup> {
    return document.backup(context.destination, cancellation);
  }

  async resolveCustomEditor(
    document: Document,
    webviewPanel: vscode.WebviewPanel,
    _token: vscode.CancellationToken
  ): Promise<void> {
    this.webviews.add(document.uri, webviewPanel);
    webviewPanel.webview.options = {
      enableScripts: true
    };
    webviewPanel.webview.html = await this.getHtmlForWebview(
      webviewPanel.webview,
      document.content,
      { uri: document.uri.toString() }
    );
    webviewPanel.webview.onDidReceiveMessage((e) =>
      this.onMessage(document, e)
    );
    webviewPanel.webview.onDidReceiveMessage((e) => {
      if (e.type === 'ready') {
        if (document.uri.scheme === 'untitled') {
          this.postMessage(webviewPanel, 'init', {
            untitled: true,
            editable: true
          });
        } else {
          const editable = vscode.workspace.fs.isWritableFileSystem(
            document.uri.scheme
          );
          this.postMessage(webviewPanel, 'init', {
            value: document.content,
            editable
          });
        }
      }
    });
  }

  async openCustomDocument(
    uri: vscode.Uri,
    openContext: { backupId?: string },
    _token: vscode.CancellationToken
  ): Promise<Document> {
    const document: Document = await Document.create(
      uri,
      openContext.backupId,
      {
        getContent: async (): Promise<string> => {
          const webviewsForDocument = Array.from(
            this.webviews.get(document.uri)
          );
          if (!webviewsForDocument.length) {
            throw new Error('Could not find webview to save for');
          }
          const panel = webviewsForDocument[0];
          return this.postMessageWithResponse<string>(panel, 'getContent', {});
        }
      }
    );
    const listeners: vscode.Disposable[] = [];
    listeners.push(
      document.onDidChange((e: any) => {
        this._onDidChangeCustomDocument.fire({
          document,
          ...e
        });
      })
    );
    listeners.push(
      document.onDidChangeContent((e: any) => {
        Array.from(this.webviews.get(document.uri)).forEach(
          (webviewPanel: vscode.WebviewPanel) => {
            this.postMessage(webviewPanel, 'update', {
              edits: e.edits,
              content: e.content
            });
          }
        );
      })
    );
    document.onDidDispose(() => disposeAll(listeners));
    return document;
  }

  private async getHtmlForWebview(
    webview: vscode.Webview,
    content: string,
    data: Record<string, any> = {}
  ): Promise<string> {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'public/webview.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'public/style.css')
    );
    data.content = content;
    const nonce = getNonce();
    return /* html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${
      webview.cspSource
    } blob:; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="${styleUri}" rel="stylesheet" />
    <title>Paw Draw</title>
  </head>
  <body id="${protocol}">
    <h1>Hello, ${protocol}!</h1>
    <p>${JSON.stringify(data)}</p>
    <script nonce="${nonce}">
      window.__${protocol}Data=${JSON.stringify(data)}
    </script>
    <script nonce="${nonce}" src="${scriptUri}"></script>
  </body>
</html>`;
  }

  private postMessageWithResponse<R = unknown>(
    panel: vscode.WebviewPanel,
    type: string,
    body: any
  ): Promise<R> {
    const requestId = this._requestId++;
    const p = new Promise<R>((resolve) =>
      this._callbacks.set(requestId, resolve)
    );
    panel.webview.postMessage({ type, requestId, body });
    return p;
  }

  private postMessage(
    panel: vscode.WebviewPanel,
    type: string,
    body: any
  ): void {
    panel.webview.postMessage({ type, body });
  }

  private onMessage(document: Document, message: any) {
    switch (message.type) {
      case 'stroke':
        document.makeEdit(message as Edit);
        return;
      case 'response': {
        const callback = this._callbacks.get(message.requestId);
        callback?.(message.body);
      }
    }
  }
}
