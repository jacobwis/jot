import { EditorState } from 'draft-js';
import keys from '../constants';

export type DocumentAction =
  | CreateDocument
  | DeleteDocument
  | SelectDocument
  | SortDocuments
  | UpdateDocumentContents
  | UpdateDocumentTitle
  | ToggleInlineStyle
  | ToggleBlockStyle;

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

interface ToggleBlockStyle {
  type: keys.TOGGLE_BLOCK_STYLE;
  style: string;
}

export function toggleBlockStyle(style: string): ToggleBlockStyle {
  return {
    type: keys.TOGGLE_BLOCK_STYLE,
    style
  };
}

interface CreateDocument {
  type: keys.NEW_DOCUMENT;
  id: string;
}

export function createDocument(id: string): CreateDocument {
  return {
    type: keys.NEW_DOCUMENT,
    id
  };
}

interface SelectDocument {
  type: keys.SELECT_DOCUMENT;
  id: string;
}

export function selectDocument(id: string) {
  return {
    type: keys.SELECT_DOCUMENT,
    id
  };
}

interface DeleteDocument {
  type: keys.DELETE_DOCUMENT;
  id: string;
}

export function deleteDocument(id: string): DeleteDocument {
  return {
    type: keys.DELETE_DOCUMENT,
    id
  };
}

interface SortDocuments {
  type: keys.SORT_DOCUMENTS;
  sortBy: string;
}

export function sortDocuments(by: string): SortDocuments {
  return {
    type: keys.SORT_DOCUMENTS,
    sortBy: by
  };
}
