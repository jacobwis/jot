import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import { AppState } from '../store';
import { createDocument, selectDocument, sortDocuments } from '../store/actions';
import { documentArraySelector } from '../store/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    documents: documentArraySelector(state),
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
  },
  onSortSelect: (sortBy: string) => {
    dispatch(sortDocuments(sortBy));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
