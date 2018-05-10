import * as React from 'react';
import Dropdown from './Dropdown';

const blockOptions = [
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
  },
  {
    key: 'paragraph',
    label: 'Paragraph'
  }
];

const Toolbar: React.StatelessComponent = () => {
  return (
    <div className="Toolbar">
      <div style={{ width: '115px' }}>
        <Dropdown options={blockOptions} />
      </div>
      <div style={{ padding: '0' }}>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-bold" />
        </button>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-italic" />
        </button>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-underline" />
        </button>
      </div>
      <div style={{ padding: '0' }}>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-align-left" />
        </button>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-align-center" />
        </button>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-align-right" />
        </button>
      </div>
      <div style={{ padding: '0' }}>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-list-ol" />
        </button>
        <button className="Toolbar__button">
          <i className="far fa-fw fa-list-ul" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
