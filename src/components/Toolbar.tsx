import * as React from 'react';
import Button from './Button';
import Dropdown from './Dropdown';

const blockOptions = [
  {
    key: 'paragraph',
    label: 'Paragraph'
  },
  {
    key: 'header-one',
    label: 'Header One'
  },
  {
    key: 'header-two',
    label: 'Header Two'
  },
  {
    key: 'header-three',
    label: 'Header Three'
  }
];

const blockOptionsMobile = [
  {
    key: 'header-one',
    label: (
      <span>
        <i className="far fa-fw fa-h1" />
      </span>
    )
  },
  {
    key: 'header-two',
    label: (
      <span>
        <i className="far fa-fw fa-h2" />
      </span>
    )
  },
  {
    key: 'header-three',
    label: (
      <span>
        <i className="far fa-fw fa-h3" />
      </span>
    )
  },
  {
    key: 'paragraph',
    label: (
      <span>
        <i className="far fa-fw fa-font" />
      </span>
    )
  }
];

const alignOptionsMobile = [
  {
    key: 'align-left',
    label: () => (
      <span>
        <i className="fas fa-fw fa-align-left" />
      </span>
    )
  },
  {
    key: 'align-center',
    label: () => (
      <span>
        <i className="fas fa-fw fa-align-center" />
      </span>
    )
  },
  {
    key: 'align-right',
    label: () => (
      <span>
        <i className="fas fa-fw fa-align-right" />
      </span>
    )
  }
];

interface Props {
  currentBlockType?: string;
  boldEnabled?: boolean;
  italicEnabled?: boolean;
  underlineEnabled?: boolean;
  textAlign?: string;
  olEnabled?: boolean;
  ulEnabled?: boolean;
  onToggleInlineStyle: (style: string) => void;
  onToggleBlockStyle: (style: string) => void;
}

const Toolbar: React.StatelessComponent<Props> = props => {
  return (
    <div className="Toolbar">
      <div
        className="display--none display-md--block"
        onMouseDown={e => {
          e.preventDefault();
        }}
        style={{ width: '115px' }}
      >
        <Dropdown
          onSelect={option => props.onToggleBlockStyle(option.key)}
          options={blockOptions}
          value={blockOptions.find(option => option.key === props.currentBlockType)}
        />
      </div>
      <div className="display-md--none">
        <Dropdown options={blockOptionsMobile} />
      </div>
      <div className="Toolbar__divider" />
      <div className="Toolbar__group">
        <Button
          className="Toolbar__button"
          onMouseDown={e => {
            e.preventDefault();
            props.onToggleInlineStyle('BOLD');
          }}
          theme={props.boldEnabled ? 'primary' : 'secondary'}
          type="link"
        >
          <i className="far fa-fw fa-bold" />
        </Button>
        <Button
          className="Toolbar__button"
          onMouseDown={e => {
            e.preventDefault();
            props.onToggleInlineStyle('ITALIC');
          }}
          theme={props.italicEnabled ? 'primary' : 'secondary'}
          type="link"
        >
          <i className="far fa-fw fa-italic" />
        </Button>
        <Button
          className="Toolbar__button"
          onMouseDown={e => {
            e.preventDefault();
            props.onToggleInlineStyle('UNDERLINE');
          }}
          theme={props.underlineEnabled ? 'primary' : 'secondary'}
          type="link"
        >
          <i className="far fa-fw fa-underline" />
        </Button>
      </div>
      <div className="Toolbar__divider" />
      <div className="Toolbar__group">
        <Button
          className="Toolbar__button"
          onMouseDown={e => {
            e.preventDefault();
            props.onToggleBlockStyle('ordered-list-item');
          }}
          theme={props.olEnabled ? 'primary' : 'secondary'}
          type="link"
        >
          <i className="far fa-fw fa-list-ol" />
        </Button>
        <Button
          className="Toolbar__button"
          onMouseDown={e => {
            e.preventDefault();
            props.onToggleBlockStyle('unordered-list-item');
          }}
          theme={props.ulEnabled ? 'primary' : 'secondary'}
          type="link"
        >
          <i className="far fa-fw fa-list-ul" />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
