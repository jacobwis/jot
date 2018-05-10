import { EditorState } from 'draft-js';
import { DocumentAction } from '../actions/documentActions';
import keys from '../constants';
import { Document } from '../types';

export interface DocumentsState {
  selectedID: string;
  documents: {
    [key: string]: Document;
  };
}

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
    default:
      return state;
  }
}

export default documents;
