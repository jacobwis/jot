import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import keys from '../../constants';
import {
  toggleBlockStyle,
  toggleInlineStyle,
  updateDocumentContents,
  updateDocumentTitle
} from '../documentActions';

describe('document actions', () => {
  it('should create an action to update a documents title', () => {
    expect(updateDocumentTitle('1', 'New Title')).toEqual({
      type: keys.UPDATE_DOCUMENT_TITLE,
      documentID: '1',
      title: 'New Title'
    });
  });

  it('should create an action to update a documents contents', () => {
    const blocks = convertFromHTML(`<b>Bold Text</b><br /><a href="#">Link</a>`);
    const contentState = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
    const newContents = EditorState.createWithContent(contentState);

    expect(updateDocumentContents('1', newContents)).toEqual({
      type: keys.UPDATE_DOCUMENT_CONTENTS,
      documentID: '1',
      contents: newContents
    });
  });

  it('should create an action to toggle inline styles', () => {
    expect(toggleInlineStyle('BOLD')).toEqual({
      type: keys.TOGGLE_INLINE_STYLE,
      style: 'BOLD'
    });
  });

  it('should create an action to toggle block styles', () => {
    expect(toggleBlockStyle('align-left')).toEqual({
      type: keys.TOGGLE_BLOCK_STYLE,
      style: 'align-left'
    });
  });
});
