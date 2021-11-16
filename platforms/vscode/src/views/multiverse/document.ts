import vscode from 'vscode';
import { Disposable } from '..';

const logger = console;

export default class Document
  extends Disposable
  implements vscode.CustomDocument
{
  private readonly _uri: vscode.Uri;

  private _content: string;

  private readonly _delegate: DocumentDelegate;

  private _edits: Edit[] = [];

  private _savedEdits: Edit[] = [];

  private constructor(
    uri: vscode.Uri,
    content: string,
    delegate: DocumentDelegate
  ) {
    super();
    this._uri = uri;
    this._content = content;
    this._delegate = delegate;
  }

  static async create(
    uri: vscode.Uri,
    backupId: string | undefined,
    delegate: DocumentDelegate
  ): Promise<Document | PromiseLike<Document>> {
    const dataFile =
      typeof backupId === 'string' ? vscode.Uri.parse(backupId) : uri;
    const content = await Document.readFile(dataFile);
    return new Document(uri, content, delegate);
  }

  private static async readFile(uri: vscode.Uri): Promise<string> {
    if (uri.scheme === 'untitled') return '';
    return '';
  }

  public get uri() {
    return this._uri;
  }

  public get content() {
    return this._content;
  }

  async save(cancellation: vscode.CancellationToken): Promise<void> {
    await this.saveAs(this.uri, cancellation);
    this._savedEdits = Array.from(this._edits);
  }

  async saveAs(
    _targetResource: vscode.Uri,
    cancellation: vscode.CancellationToken
  ): Promise<void> {
    const content = await this._delegate.getContent();
    if (cancellation.isCancellationRequested) return;
    logger.log('save as', content);
  }

  async revert(_cancellation: vscode.CancellationToken): Promise<void> {
    const content = await Document.readFile(this.uri);
    this._content = content;
    this._edits = this._savedEdits;
    this._onDidChangeDocument.fire({
      content,
      edits: this._edits
    });
  }

  async backup(
    destination: vscode.Uri,
    cancellation: vscode.CancellationToken
  ): Promise<vscode.CustomDocumentBackup> {
    await this.saveAs(destination, cancellation);
    return {
      id: destination.toString(),
      delete: async () => {
        try {
          await vscode.workspace.fs.delete(destination);
        } catch {
          // noop
        }
      }
    };
  }

  makeEdit(edit: Edit) {
    this._edits.push(edit);
    this._onDidChange.fire({
      label: 'Edit',
      undo: async () => {
        this._edits.pop();
        this._onDidChangeDocument.fire({
          edits: this._edits
        });
      },
      redo: async () => {
        this._edits.push(edit);
        this._onDidChangeDocument.fire({
          edits: this._edits
        });
      }
    });
  }

  dispose(): void {
    this._onDidDispose.fire();
    super.dispose();
  }

  private readonly _onDidDispose = this._register(
    new vscode.EventEmitter<void>()
  );

  public readonly onDidDispose = this._onDidDispose.event;

  private readonly _onDidChangeDocument = this._register(
    new vscode.EventEmitter<Edit>()
  );

  public readonly onDidChangeContent = this._onDidChangeDocument.event;

  private readonly _onDidChange = this._register(
    new vscode.EventEmitter<{
      readonly label: string;
      undo(): void;
      redo(): void;
    }>()
  );

  public readonly onDidChange = this._onDidChange.event;
}

export interface Edit {}

interface DocumentDelegate {
  getContent(): Promise<string>;
}
