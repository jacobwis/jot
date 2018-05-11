import { ContentBlock, Editor, EditorState } from 'draft-js';
import * as React from 'react';
import { Document } from '../store';

interface Props {
  document: Document;
  onTitleChange: (documentID: string, title: string) => void;
  onContentsChange: (documentID: string, contents: EditorState) => void;
}

const myBlockStyleFn = (contentBlock: ContentBlock) => {
  const blockType = contentBlock.getType() as string;

  if (blockType === 'align-right') {
    return 'document--align-right';
  }

  if (blockType === 'align-center') {
    return 'document--align-center';
  }

  return 'document--align-left';
};

const DocumentEditor: React.StatelessComponent<Props> = props => {
  return (
    <div className="DocumentEditor">
      <input
        className="DocumentEditor__title"
        onChange={e => props.onTitleChange(props.document.id, e.target.value)}
        value={props.document.title}
      />
      <div className="DocumentEditor__contents">
        <Editor
          editorState={props.document.contents}
          onChange={newState => props.onContentsChange(props.document.id, newState)}
          blockStyleFn={myBlockStyleFn}
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
