import { EditorState } from 'draft-js';
import * as React from 'react';
import { connect } from 'react-redux';
import DocumentEditor from '../components/DocumentEditor';
import { AppState } from '../store';
import { deleteDocument, updateDocumentContents, updateDocumentTitle } from '../store/actions';

const mapStateToProps = (state: AppState) => ({
  document: state.documents.documents[state.documents.selectedID]
});

const mapDispatchToProps = (dispatch: any) => ({
  onTitleChange: (documentID: string, title: string) => {
    dispatch(updateDocumentTitle(documentID, title));
  },
  onContentsChange: (documentID: string, contents: EditorState) => {
    dispatch(updateDocumentContents(documentID, contents));
  },
  onDeleteClick: (documentID: string) => {
    dispatch(deleteDocument(documentID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEditor);
