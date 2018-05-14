import { EditorState } from 'draft-js';

export interface Document {
  id: string;
  title: string;
  contents: EditorState;
  createdAt: Date;
  updatedAt: Date;
}
