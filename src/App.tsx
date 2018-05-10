import * as React from 'react';
import { hot } from 'react-hot-loader';
import Button from './components/Button';
import Toolbar from './components/Toolbar';

class App extends React.Component {
  public render() {
    return (
      <>
        <div className="TempWrapper">
          <div className="container">
            <Toolbar />
          </div>
        </div>
        <div className="container">
          <div style={{ padding: '16px 0 0px' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 600 }}>Themes</h1>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button onClick={() => alert('clicked')}>Primary Button</Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="outline">Primary Button</Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="link">Primary Button</Button>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button>
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="outline">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="link">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary">Secondary Button</Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary" type="outline">
                Secondary Button
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary" type="link">
                Secondary Button
              </Button>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary" type="outline">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button theme="secondary" type="link">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
          </div>
          <div style={{ padding: '16px 0 0px' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 600 }}>Icon Left</h1>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button iconLeft={() => <i className="fas fa-search" />}>Primary Button</Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="outline" iconLeft={() => <i className="fas fa-search" />}>
                Primary Button
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="link" iconLeft={() => <i className="fas fa-search" />}>
                Primary Button
              </Button>
            </div>
          </div>
          <div style={{ padding: '16px 0 0px' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 600 }}>Icon Right</h1>
            </div>
          </div>
          <div style={{ padding: '16px 0' }}>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button iconRight={() => <i className="fas fa-caret-down" />}>Primary Button</Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="outline" iconRight={() => <i className="fas fa-caret-down" />}>
                Primary Button
              </Button>
            </div>
            <div style={{ display: 'inline-block', padding: '0 8px' }}>
              <Button type="link" iconRight={() => <i className="fas fa-caret-down" />}>
                Primary Button
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default hot(module)(App);
