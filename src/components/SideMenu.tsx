import * as classNames from 'classnames';
import * as React from 'react';
import { Document } from '../store';
import Button from './Button';

interface Props {
  documents: Document[];
  selectedID: string;
  onNewNoteClick?: () => void;
  onNoteSelect?: (id: string) => void;
}

const SideMenu: React.StatelessComponent<Props> = props => (
  <div>
    <div className="SideMenu__row">
      <div />
      <Button onClick={props.onNewNoteClick}>New Note</Button>
    </div>
    <div className="DocumentList">
      {props.documents.map(doc => {
        const classStr = classNames('DocumentList__item', {
          'DocumentList__item--selected': doc.id === props.selectedID
        });

        return (
          <div className={classStr} key={doc.id} onClick={() => props.onNoteSelect(doc.id)}>
            <p className="DocumentList__title">{doc.title}</p>
            <p className="DocumentList__contents">
              {doc.contents
                .getCurrentContent()
                .getPlainText()
                .split('\n')
                .reduce((acc, line) => {
                  if (line) {
                    return [...acc, line.trim()];
                  }
                  return [...acc];
                }, [])
                .join(' ')
                .slice(0, 100)}...
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

export default SideMenu;
