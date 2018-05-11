import { EditorState } from 'draft-js';
import keys from '../constants';

export type DocumentAction = UpdateDocumentContents | UpdateDocumentTitle | ToggleInlineStyle;

interface UpdateDocumentContents {
  type: keys.UPDATE_DOCUMENT_CONTENTS;
  documentID: string;
  contents: EditorState;
}

export function updateDocumentContents(
  documentID: string,
  contents: EditorState
): UpdateDocumentContents {
  return {
    type: keys.UPDATE_DOCUMENT_CONTENTS,
    documentID,
    contents
  };
}

interface UpdateDocumentTitle {
  type: keys.UPDATE_DOCUMENT_TITLE;
  documentID: string;
  title: string;
}

export function updateDocumentTitle(documentID: string, title: string): UpdateDocumentTitle {
  return {
    type: keys.UPDATE_DOCUMENT_TITLE,
    documentID,
    title
  };
}

interface ToggleInlineStyle {
  type: keys.TOGGLE_INLINE_STYLE;
  style: string;
}

export function toggleInlineStyle(style: string): ToggleInlineStyle {
  return {
    type: keys.TOGGLE_INLINE_STYLE,
    style
  };
}
