import * as React from 'react';
import Menu from './Menu';

export interface DropdownOption {
  key: string;
  label: string;
}

interface Props {
  options: DropdownOption[];
  onSelect?: (option: DropdownOption) => void;
  value?: DropdownOption;
}

interface State {
  selected?: DropdownOption;
  isOpen: boolean;
}

class Dropdown extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    if (nextProps.value) {
      return {
        selected: nextProps.value
      };
    }

    if (!prevState.selected) {
      return {
        selected: nextProps.options[0]
      };
    }

    return null;
  }

  public state: State = {
    isOpen: false
  };

  public hideMenu = () => {
    this.setState({ isOpen: false });
  };

  public showMenu = () => {
    this.setState({ isOpen: true });
    document.addEventListener('click', this.hideMenu, { once: true });
  };

  public onSelect = (option: DropdownOption) => {
    if (this.props.value) {
      if (this.props.onSelect) {
        this.props.onSelect(option);
      }
    } else {
      this.setState({ selected: option });
    }
  };

  public render() {
    return (
      <div className="Dropdown">
        <button className="Dropdown__button" onClick={this.showMenu}>
          {this.state.selected.label}
          <span>
            <i className="fas fa-caret-down" />
          </span>
        </button>
        {this.state.isOpen && (
          <div className="Dropdown__menu">
            <Menu>
              {this.props.options.map(option => (
                <Menu.Item key={option.key}>
                  <button onClick={() => this.onSelect(option)}>{option.label}</button>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
