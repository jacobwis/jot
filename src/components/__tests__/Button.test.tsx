import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Button from '../Button';

describe('<Button />', () => {
  it('should have the class "Button"', () => {
    const btn = shallow(<Button />);

    expect(btn).toHaveClassName('Button');
  });

  it('should render "props.children"', () => {
    const btn = shallow(<Button>Button Text</Button>);

    expect(btn).toHaveText('Button Text');
  });

  it('should pass "props.className" to the element', () => {
    const btn = shallow(<Button className="CustomClass" />);

    expect(btn).toHaveClassName('CustomClass');
  });

  it('should render "props.iconLeft"', () => {
    const btn = shallow(<Button iconLeft={() => <i className="fas fa-search" />} />);

    expect(btn.find('span')).toContainReact(<i className="fas fa-search" />);
  });

  it('should render "props.iconLeft" inside of a span element with the class "Button__icon-left"', () => {
    const btn = shallow(<Button iconLeft={() => <i className="fas fa-search" />} />);

    expect(btn.find('span')).toHaveClassName('Button__icon-left');
  });

  it('should render "props.iconRight"', () => {
    const btn = shallow(<Button iconRight={() => <i className="fas fa-search" />} />);

    expect(btn.find('span')).toContainReact(<i className="fas fa-search" />);
  });

  it('should render "props.iconRight" inside of a span element with the class "Button__icon-right"', () => {
    const btn = shallow(<Button iconRight={() => <i className="fas fa-search" />} />);

    expect(btn.find('span')).toHaveClassName('Button__icon-right');
  });

  it('should call "props.onClick" when clicked', () => {
    const fn = jest.fn();

    const btn = shallow(<Button onClick={fn} />);
    btn.simulate('click');

    expect(fn).toHaveBeenCalled();
  });

  it('should call "props.onMouseDown" on mouseDown', () => {
    const fn = jest.fn();

    const btn = shallow(<Button onMouseDown={fn} />);

    btn.simulate('mouseDown');

    expect(fn).toHaveBeenCalled();
  });

  it('"props.theme" should equal "primary" by default', () => {
    const btn = mount(<Button />);

    expect(btn.prop('theme')).toEqual('primary');
  });

  it('when "props.theme" equals "primary", the element should have the class "Button--primary"', () => {
    const btn = shallow(<Button theme="primary" />);

    expect(btn).toHaveClassName('Button--primary');
  });

  it('when "props.theme" equals "secondary", the element should have the class "Button--secondary"', () => {
    const btn = shallow(<Button theme="secondary" />);

    expect(btn).toHaveClassName('Button--secondary');
  });

  it('"props.type" should equal "solid" by default', () => {
    const btn = mount(<Button />);

    expect(btn.prop('type')).toEqual('solid');
  });

  it('when "props.type" equals "solid", the element should have the class "Button--solid"', () => {
    const btn = shallow(<Button type="solid" />);

    expect(btn).toHaveClassName('Button--solid');
  });

  it('when "props.type" equals "outline", the element should have the class "Button--outline"', () => {
    const btn = shallow(<Button type="outline" />);

    expect(btn).toHaveClassName('Button--outline');
  });

  it('when "props.type" equals "link", the element should have the class "Button--link"', () => {
    const btn = shallow(<Button type="link" />);

    expect(btn).toHaveClassName('Button--link');
  });
});
