import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import MainLayout from './components/MainLayout';
import DocumentEditor from './containers/ConnectedDocumentEditor';
import { AppState, Document } from './store';

interface Props {
  selectedDocument: Document;
}

class App extends React.Component<Props> {
  public render() {
    return (
      <MainLayout>
        <DocumentEditor />
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  selectedDocument: state.documents.documents[state.documents.selectedID]
});

const connectedApp = connect(mapStateToProps)(App);

export default hot(module)(connectedApp);
