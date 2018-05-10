import { Editor, EditorState } from 'draft-js';
import * as React from 'react';
import { Document } from '../store';

interface Props {
  document: Document;
  onTitleChange: (documentID: string, title: string) => void;
  onContentsChange: (documentID: string, contents: EditorState) => void;
}

const DocumentEditor: React.StatelessComponent<Props> = props => {
  return (
    <div className="DocumentEditor">
      <input
        className="DocumentEditor__title"
        onChange={e => props.onTitleChange(props.document.id, e.target.value)}
        value={props.document.title}
      />
      <div>
        <Editor
          editorState={props.document.contents}
          onChange={newState => props.onContentsChange(props.document.id, newState)}
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
