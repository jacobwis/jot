import * as React from 'react';
import { hot } from 'react-hot-loader';
import Dropdown from './components/Dropdown';

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

class App extends React.Component {
  public render() {
    return (
      // <div className="TempWrapper">
      //   <div className="container">
      //     <Toolbar />
      //   </div>
      // </div>
      <div
        style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '300px' }}
      >
        <Dropdown options={blockOptions} />
      </div>
    );
  }
}

export default hot(module)(App);
