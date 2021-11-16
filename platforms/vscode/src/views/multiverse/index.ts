import Document from './document';
import DocumentContentProvider from './documentContentProvider';
import EditorProvider from './editorProvider';

export const protocol = 'multiverse';

export const extension = 'multi';

export { EditorProvider, Document, DocumentContentProvider };

export * from './document';
export * from './documentContentProvider';
export * from './editorProvider';
