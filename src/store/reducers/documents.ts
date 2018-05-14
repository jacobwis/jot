import { EditorState, RichUtils } from 'draft-js';
import { DocumentAction } from '../actions/documentActions';
import keys from '../constants';
import { Document } from '../types';

export interface DocumentsState {
  selectedID: string;
  documents: {
    [key: string]: Document;
  };
}

const defaultDocument = {
  id: '1',
  title: 'Untitled Document',
  contents: EditorState.createEmpty()
};

export const initialState: DocumentsState = {
  selectedID: '1',
  documents: {
    '1': {
      id: '1',
      title: 'Untitled Document',
      contents: EditorState.createEmpty()
    }
  }
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
            title: action.title
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
            contents: action.contents
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
            contents: EditorState.createEmpty()
          }
        }
      };
    case keys.SELECT_DOCUMENT:
      return {
        ...state,
        selectedID: action.id
      };
    case keys.DELETE_DOCUMENT:
      let newDocuments = Object.keys(state.documents).reduce((acc, key) => {
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

      if (Object.keys(newDocuments).length === 0) {
        newDocuments = {
          '1': defaultDocument
        };
      }

      const i = Object.keys(state.documents).indexOf(action.id);
      return {
        ...state,
        selectedID:
          action.id === state.selectedID ? Object.keys(newDocuments)[0] : state.selectedID,
        documents: newDocuments
      };
    default:
      return state;
  }
}

export default documents;
