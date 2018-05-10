import { shallow } from 'enzyme';
import * as React from 'react';
import Menu, { MenuItem } from '../Menu';

describe('<Menu />', () => {
  it('should provide access to <Menu.Item />', () => {
    expect(Menu.Item).toEqual(MenuItem);
  });

  it('should render children', () => {
    const menu = shallow(
      <Menu>
        <div>Child Node</div>
      </Menu>
    );

    expect(menu).toContainReact(<div>Child Node</div>);
  });
});

describe('<MenuItem />', () => {
  it('should render children', () => {
    const item = shallow(
      <MenuItem>
        <div>Child Node</div>
      </MenuItem>
    );

    expect(item).toContainReact(<div>Child Node</div>);
  });

  it('if "props.children" is a string, it should be wrapped in a span element', () => {
    const item = shallow(<MenuItem>Text Node</MenuItem>);
    expect(item).toContainReact(<span>Text Node</span>);
  });
});
