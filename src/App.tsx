import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainLayout from './components/MainLayout';

interface State {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class App extends React.Component<{}, State> {
  public state: State = {};

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }
  public render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went strong</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return <MainLayout />;
  }
}

export default hot(module)(App);
