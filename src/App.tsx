import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import DocumentEditor from './containers/ConnectedDocumentEditor';
import { createUniqueID } from './lib';
import { AppState, Document } from './store';
import { createDocument } from './store/actions';

interface Props {
  documents: Document[];
  selectedDocument: Document;
  createDocument: () => void;
}

class App extends React.Component<Props> {
  public componentDidUpdate() {
    if (this.props.documents.length === 0) {
      this.props.createDocument();
    }
  }

  public componentDidMount() {
    if (this.props.documents.length === 0) {
      this.props.createDocument();
    }
  }

  public render() {
    return (
      <MainLayout>
        <DocumentEditor />
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  selectedDocument: state.documents.documents[state.documents.selectedID],
  documents: Object.keys(state.documents.documents).map(key => state.documents.documents[key])
});

const mapDispatchToProps = (dispatch: any) => ({
  createDocument: () => {
    dispatch(createDocument(createUniqueID()));
  }
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default hot(module)(connectedApp);
