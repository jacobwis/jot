import * as React from 'react';
import Button from './Button';
import Menu from './Menu';

export interface DropdownOption {
  key: string;
  label: (() => React.ReactNode) | React.ReactNode;
  buttonLabel?: (() => React.ReactNode) | React.ReactNode;
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
    this.props.onSelect && this.props.onSelect(option);

    if (!this.props.value) {
      this.setState({ selected: option });
    }
  };

  public renderLabel = (label: (() => React.ReactNode) | React.ReactNode) => {
    return typeof label === 'function' ? label() : label;
  };

  public render() {
    const { selected } = this.state;
    return (
      <div className="Dropdown">
        <Button
          iconRight={() => <i className="fas fa-caret-down" />}
          onClick={this.showMenu}
          theme="secondary"
          type="link"
        >
          {selected.buttonLabel
            ? this.renderLabel(selected.buttonLabel)
            : this.renderLabel(selected.label)}
        </Button>
        {this.state.isOpen && (
          <div className="Dropdown__menu">
            <Menu>
              {this.props.options.map(option => (
                <Menu.Item key={option.key}>
                  <button onClick={() => this.onSelect(option)}>
                    {typeof option.label === 'function' ? option.label() : option.label}
                  </button>
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
