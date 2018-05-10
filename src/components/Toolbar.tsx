import * as React from 'react';
import Button from './Button';
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

const Toolbar: React.StatelessComponent = () => {
  return (
    <div className="Toolbar">
      <div className="display--none display-md--block" style={{ width: '115px' }}>
        <Dropdown options={blockOptions} />
      </div>
      <div className="display-md--none">
        <Dropdown options={blockOptionsMobile} />
      </div>
      <div className="Toolbar__divider" />
      <div className="Toolbar__group">
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-bold" />
        </Button>
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-italic" />
        </Button>
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-underline" />
        </Button>
      </div>
      <div className="Toolbar__divider" />
      <div className="Toolbar__group">
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-list-ol" />
        </Button>
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-list-ul" />
        </Button>
      </div>
      <div className="Toolbar__divider" />
      <div className="display-md--none">
        <Dropdown options={alignOptionsMobile} />
      </div>
      <div className="display--none display-md--block">
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-align-left" />
        </Button>
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-align-center" />
        </Button>
        <Button className="Toolbar__button" theme="secondary" type="link">
          <i className="far fa-fw fa-align-right" />
        </Button>
      </div>
      {/* <div style={{ padding: '0' }}>
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
      </div> */}
    </div>
  );
};

export default Toolbar;
