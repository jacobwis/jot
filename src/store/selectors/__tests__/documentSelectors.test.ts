import { initialState } from '../../reducers/documents';
import { selectedDocumentContentsSelector, selectedDocumentSelector } from '../documentSelectors';

const rootState = {
  documents: initialState
};

describe('selectedDocumentSelector', () => {
  it('should return the selected document', () => {
    expect(selectedDocumentSelector({ documents: initialState })).toEqual(
      initialState.documents[initialState.selectedID]
    );
  });
});

describe('selectedDocumentContentsSelector', () => {
  it('should return the selected documents contents', () => {
    expect(selectedDocumentContentsSelector(rootState)).toEqual(
      initialState.documents[initialState.selectedID].contents
    );
  });
});
