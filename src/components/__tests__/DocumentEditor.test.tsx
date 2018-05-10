import { Editor, EditorState } from 'draft-js';
import { shallow } from 'enzyme';
import * as React from 'react';
import DocumentEditor from '../DocumentEditor';

describe('<DocumentEditor />', () => {
  it('should call "props.onTitleChange" when the title input changes', () => {
    const fn = jest.fn();

    const document = {
      id: '1',
      title: '',
      contents: EditorState.createEmpty()
    };

    const wrap = shallow(
      // tslint:disable-next-line:no-empty
      <DocumentEditor document={document} onContentsChange={() => {}} onTitleChange={fn} />
    );

    wrap.find('input.DocumentEditor__title').simulate('change', {
      target: {
        value: 'A'
      }
    });

    expect(fn).toHaveBeenCalled();
  });

  it('should call "props.onContentsChange" when the content editor changes', () => {
    const document = {
      id: '1',
      title: '',
      contents: EditorState.createEmpty()
    };
    const onChange = jest.fn();

    const wrap = shallow(
      // tslint:disable-next-line:no-empty
      <DocumentEditor document={document} onContentsChange={onChange} onTitleChange={() => {}} />
    );

    wrap.find(Editor).simulate('change');

    expect(onChange).toHaveBeenCalled();
  });
});
