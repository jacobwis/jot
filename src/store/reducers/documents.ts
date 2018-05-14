import { EditorState, RichUtils } from 'draft-js';
import { DocumentAction } from '../actions/documentActions';
import keys from '../constants';
import { Document } from '../types';

export interface DocumentsState {
  selectedID?: string;
  documents: {
    [key: string]: Document;
  };
  sortBy: string;
}

export const defaultEditorState = EditorState.createEmpty();

export const defaultDocument = {
  id: '1',
  title: 'Untitled Document',
  contents: defaultEditorState,
  createdAt: new Date(),
  updatedAt: new Date()
};

export const initialState: DocumentsState = {
  documents: {},
  sortBy: 'updated-at'
};

function documents(state: DocumentsState = initialState, action: DocumentAction) {
  switch (action.type) {
    case keys.UPDATE_DOCUMENT_TITLE:
      return {
        ...state,
        documents: {
          ...state.documents,
          [action.documentID]: {
            ...state.documents[action.documentID],
            title: action.title,
            updatedAt: new Date()
          }
        }
      };
    case keys.UPDATE_DOCUMENT_CONTENTS:
      return {
        ...state,
        documents: {
          ...state.documents,
          [action.documentID]: {
            ...state.documents[action.documentID],
            contents: action.contents,
            updatedAt: new Date()
          }
        }
      };
    case keys.TOGGLE_INLINE_STYLE:
      return {
        ...state,
        documents: {
          ...state.documents,
          [state.selectedID]: {
            ...state.documents[state.selectedID],
            contents: RichUtils.toggleInlineStyle(
              state.documents[state.selectedID].contents,
              action.style
            )
          }
        }
      };
    case keys.TOGGLE_BLOCK_STYLE:
      return {
        ...state,
        documents: {
          ...state.documents,
          [state.selectedID]: {
            ...state.documents[state.selectedID],
            contents: RichUtils.toggleBlockType(
              state.documents[state.selectedID].contents,
              action.style
            )
          }
        }
      };
    case keys.NEW_DOCUMENT:
      return {
        ...state,
        selectedID: action.id,
        documents: {
          ...state.documents,
          [action.id]: {
            id: action.id,
            title: 'Untitled Document',
            contents: EditorState.createEmpty(),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        }
      };
    case keys.SELECT_DOCUMENT:
      return {
        ...state,
        selectedID: action.id
      };
    case keys.DELETE_DOCUMENT:
      const newDocuments = Object.keys(state.documents).reduce((acc, key) => {
        if (key === action.id) {
          return {
            ...acc
          };
        }
        return {
          ...acc,
          [key]: state.documents[key]
        };
      }, {});

      const i = Object.keys(state.documents).indexOf(action.id);
      return {
        ...state,
        selectedID:
          action.id === state.selectedID ? Object.keys(newDocuments)[0] : state.selectedID,
        documents: newDocuments
      };
    case keys.SORT_DOCUMENTS:
      return {
        ...state,
        sortBy: action.sortBy
      };
    default:
      return state;
  }
}

export default documents;
