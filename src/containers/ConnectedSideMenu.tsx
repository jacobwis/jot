import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import { AppState } from '../store';
import { createDocument, selectDocument } from '../store/actions';

const mapStateToProps = (state: AppState) => {
  return {
    documents: Object.keys(state.documents.documents).map(key => {
      return state.documents.documents[key];
    }),
    selectedID: state.documents.selectedID
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onNewNoteClick: () => {
    const newID = `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    dispatch(createDocument(newID));
  },
  onNoteSelect: (id: string) => {
    dispatch(selectDocument(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
