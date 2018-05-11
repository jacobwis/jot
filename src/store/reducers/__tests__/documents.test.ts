import { ContentState, EditorState, RichUtils, convertFromHTML } from 'draft-js';
import keys from '../../constants';
import documents, { initialState } from '../documents';

describe('documents reducer', () => {
  it('should return initial state', () => {
    // @ts-ignore
    const result = documents(undefined, {});

    expect(result).toEqual(initialState);
  });

  it(`should handle ${keys.UPDATE_DOCUMENT_TITLE}`, () => {
    const results = documents(initialState, {
      type: keys.UPDATE_DOCUMENT_TITLE,
      documentID: '1',
      title: 'New Value'
    });

    expect(results).toEqual({
      selectedID: '1',
      documents: {
        '1': {
          id: '1',
          title: 'New Value',
          contents: initialState.documents['1'].contents
        }
      }
    });
  });

  it(`should handle ${keys.UPDATE_DOCUMENT_CONTENTS}`, () => {
    const blocks = convertFromHTML(`<b>Bold Text</b><br /><a href="#">Link</a>`);
    const contentState = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
    const newContents = EditorState.createWithContent(contentState);

    const result = documents(initialState, {
      type: keys.UPDATE_DOCUMENT_CONTENTS,
      documentID: '1',
      contents: newContents
    });

    expect(result).toEqual({
      selectedID: '1',
      documents: {
        '1': {
          id: '1',
          title: 'Untitled Document',
          contents: newContents
        }
      }
    });
  });

  it(`should handle ${keys.TOGGLE_INLINE_STYLE}`, () => {
    const newState = documents(initialState, {
      type: keys.TOGGLE_INLINE_STYLE,
      style: 'BOLD'
    });

    expect(newState).toEqual({
      selectedID: '1',
      documents: {
        '1': {
          id: '1',
          title: 'Untitled Document',
          contents: RichUtils.toggleInlineStyle(initialState.documents['1'].contents, 'BOLD')
        }
      }
    });
  });
});
