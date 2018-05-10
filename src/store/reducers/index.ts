import { combineReducers } from 'redux';
import documentsReducer, { DocumentsState } from './documents';

export interface AppState {
  documents: DocumentsState;
}

export default combineReducers({
  documents: documentsReducer
});
