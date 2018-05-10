import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Dropdown from '../Dropdown';

const options = [
  {
    key: '1',
    label: 'Option One'
  },
  {
    key: '2',
    label: 'Option Two'
  },
  {
    key: '3',
    label: 'Option Three'
  }
];

describe('<Dropdown />', () => {
  it('.hideMenu() should set "state.isOpen" to false', () => {
    const el = shallow(<Dropdown options={options} />);

    el.setState({ isOpen: true });
    expect(el.state('isOpen')).toEqual(true);

    const instance = el.instance() as Dropdown;
    instance.hideMenu();

    expect(el.state('isOpen')).toEqual(false);
  });

  it('.showMenu() should set "state.isOpen" to true', () => {
    const el = shallow(<Dropdown options={options} />);

    expect(el.state('isOpen')).toEqual(false);

    const instance = el.instance() as Dropdown;
    instance.showMenu();

    expect(el.state('isOpen')).toEqual(true);
  });

  it('.onSelect(option) should set "state.selected" to option', () => {
    const el = shallow(<Dropdown options={options} />);

    const instance = el.instance() as Dropdown;
    instance.onSelect(options[2]);

    expect(el.state('selected')).toEqual(options[2]);
  });

  it('.onSelect(option) should not set "state.selected" if "props.value" is defined', () => {
    const el = shallow(<Dropdown value={options[1]} options={options} />);

    const instance = el.instance() as Dropdown;
    instance.onSelect(options[2]);

    expect(el.state('selected')).toEqual(options[1]);
  });

  it('.onSelect(option) should call "props.onSelect"', () => {
    const fn = jest.fn();

    const el = shallow(<Dropdown onSelect={fn} options={options} />);

    const instance = el.instance() as Dropdown;
    instance.onSelect(options[2]);

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(options[2]);
  });

  it('.renderLabel() should call the label argument if it is an argument', () => {
    const fn = jest.fn();
    const el = shallow(<Dropdown options={options} />);

    const instance = el.instance() as Dropdown;
    instance.renderLabel(fn);

    expect(fn).toHaveBeenCalled();
  });

  it('.renderLabel() should render the label argument', () => {
    const el = shallow(<Dropdown options={options} />);

    const instance = el.instance() as Dropdown;

    // @ts-ignore
    const label = shallow(instance.renderLabel(<div>{options[1].label}</div>));
    expect(label).toContainReact(<div>Option Two</div>);
  });

  it('"state.isOpen" should be false by default', () => {
    const el = shallow(<Dropdown options={options} />);

    expect(el.state('isOpen')).toEqual(false);
  });

  it('the default value of "state.selected" should be the "props.options"[0] when "props.value" is undefined', () => {
    const el = shallow(<Dropdown options={options} />);

    expect(el.state('selected')).toEqual(options[0]);
  });

  it('"state.selected" should equal when "props.value" when it is defined', () => {
    const el = shallow(<Dropdown value={options[2]} options={options} />);

    expect(el.state('selected')).toEqual(options[2]);
  });

  it('clicking the dropdown button should open the menu', () => {
    const el = mount(<Dropdown options={options} />);

    expect(el.find('.Dropdown__menu')).not.toExist();

    el.find('button').simulate('click');

    expect(el.find('.Dropdown__menu')).toExist();
  });
});
