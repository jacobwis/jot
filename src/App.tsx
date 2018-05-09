import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <h1>Jot App</h1>
      </div>
    );
  }
}

export default hot(module)(App);
