import * as React from 'react';
import SideMenu from '../containers/ConnectedSideMenu';
import Toolbar from '../containers/ConnectedToolbar';
import Button from './Button';

interface State {
  menuVisible: boolean;
}

class MainLayout extends React.Component<{}, State> {
  public menuArea = React.createRef<HTMLDivElement>();
  public contentArea = React.createRef<HTMLDivElement>();
  public state: State = {
    menuVisible: false
  };

  public showMenu = async () => {
    await this.attachTransitionToContentArea();
    const menuWidth = this.menuArea.current.clientWidth;

    this.contentArea.current.style.setProperty('left', `${menuWidth}px`);
    this.contentArea.current.addEventListener(
      'transitionend',
      () => {
        this.contentArea.current.style.removeProperty('transition');
      },
      { once: true }
    );
    this.listenForContentAreaClick();
    this.setState({ menuVisible: true });
  };

  public hideMenu = async () => {
    await this.attachTransitionToContentArea();
    this.contentArea.current.style.removeProperty('left');
    this.contentArea.current.addEventListener(
      'transitionend',
      () => {
        this.contentArea.current.style.removeProperty('transition');
      },
      { once: true }
    );
    this.setState({ menuVisible: false });
  };

  public listenForContentAreaClick = () => {
    this.contentArea.current.removeEventListener('click', this.hideMenu);
    this.contentArea.current.addEventListener('click', this.hideMenu, { once: true });
  };

  public attachTransitionToContentArea = () => {
    return new Promise((resolve, reject) => {
      this.contentArea.current.style.setProperty('transition', 'left 0.3s ease-in-out');
      requestAnimationFrame(() => {
        resolve();
      });
    });
  };

  public handleResize = (mq: MediaQueryList) => {
    if (mq.matches) {
      this.contentArea.current.style.removeProperty('left');
    }
  };

  public componentDidMount() {
    const mq = window.matchMedia('(min-width: 840px)');
    mq.addListener(this.handleResize);
    this.handleResize(mq);
  }

  public render() {
    const contentClass = this.state.menuVisible
      ? 'MainLayout__content-area MainLayout__content-area--menu-visible'
      : 'MainLayout__content-area';
    return (
      <div className="MainLayout">
        <div className="MainLayout__menu-area" ref={this.menuArea}>
          <SideMenu />
        </div>
        <div className={contentClass} ref={this.contentArea}>
          <div className="MainLayout__nav-area">
            <div className="MainLayout__menu-toggle display-md--none">
              <Button onClick={this.showMenu} type="link" theme="secondary">
                <i className="fas fa-fw fa-bars" />
              </Button>
            </div>
            <Toolbar />
          </div>
          <div className="MainLayout__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
