import { ContentState, EditorState, RichUtils, convertFromHTML } from 'draft-js';
import keys from '../../constants';
import documents, { defaultDocument, initialState } from '../documents';

const stateWithDocument = {
  ...initialState,
  selectedID: defaultDocument.id,
  documents: {
    ...initialState.documents,
    [defaultDocument.id]: defaultDocument
  }
};

describe('documents reducer', () => {
  it('should return initial state', () => {
    // @ts-ignore
    const result = documents(undefined, {});

    expect(result).toEqual(initialState);
  });

  it(`should handle ${keys.UPDATE_DOCUMENT_TITLE}`, () => {
    const results = documents(stateWithDocument, {
      type: keys.UPDATE_DOCUMENT_TITLE,
      documentID: '1',
      title: 'New Value'
    });

    expect(results.documents['1'].title).toEqual('New Value');
  });

  it(`should handle ${keys.UPDATE_DOCUMENT_CONTENTS}`, () => {
    const blocks = convertFromHTML(`<b>Bold Text</b><br /><a href="#">Link</a>`);
    const contentState = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
    const newContents = EditorState.createWithContent(contentState);

    const result = documents(stateWithDocument, {
      type: keys.UPDATE_DOCUMENT_CONTENTS,
      documentID: '1',
      contents: newContents
    });

    expect(result.documents['1'].contents).toEqual(newContents);
  });

  it(`should handle ${keys.TOGGLE_INLINE_STYLE}`, () => {
    const newState = documents(stateWithDocument, {
      type: keys.TOGGLE_INLINE_STYLE,
      style: 'BOLD'
    });

    expect(newState.documents['1'].contents).toEqual(
      RichUtils.toggleInlineStyle(stateWithDocument.documents['1'].contents, 'BOLD')
    );
  });

  it(`should handle ${keys.NEW_DOCUMENT}`, () => {
    const newState = documents(initialState, {
      type: keys.NEW_DOCUMENT,
      id: '123'
    });

    expect(newState).toMatchObject({
      selectedID: '123',
      documents: {
        ...initialState.documents,
        '123': {
          id: '123',
          title: 'Untitled Document',
          contents: newState.documents['123'].contents
        }
      }
    });
  });

  it(`should handle ${keys.SELECT_DOCUMENT}`, () => {
    const firstState = {
      ...initialState,
      documents: {
        ...initialState.documents,
        '123': {
          id: '123',
          title: 'Untitled Document',
          contents: EditorState.createEmpty(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    };

    const newState = documents(firstState, {
      type: keys.SELECT_DOCUMENT,
      id: '123'
    });

    expect(newState).toEqual({
      ...firstState,
      selectedID: '123'
    });
  });

  it(`should handle ${keys.DELETE_DOCUMENT}`, () => {
    const firstState = {
      ...initialState,
      documents: {
        ...initialState.documents,
        '123': {
          id: '123',
          title: 'Untitled Document',
          contents: EditorState.createEmpty(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    };

    const newState = documents(firstState, {
      type: keys.DELETE_DOCUMENT,
      id: '123'
    });

    expect(newState).toEqual(initialState);
  });

  it(`should handle ${keys.SORT_DOCUMENTS}`, () => {
    const newState = documents(initialState, {
      type: keys.SORT_DOCUMENTS,
      sortBy: 'UPDATED_AT'
    });

    expect(newState.sortBy).toEqual('UPDATED_AT');
  });
});
