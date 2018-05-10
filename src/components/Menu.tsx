import * as React from 'react';

export const MenuItem: React.StatelessComponent = props => {
  return (
    <div className="MenuItem">
      {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
    </div>
  );
};

class Menu extends React.Component {
  public static Item = MenuItem;

  public render() {
    return <div className="Menu">{this.props.children}</div>;
  }
}

export default Menu;
