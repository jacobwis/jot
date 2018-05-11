import * as classNames from 'classnames';
import * as React from 'react';

interface Props {
  className?: string;
  iconLeft?: () => React.ReactNode;
  iconRight?: () => React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  theme?: 'primary' | 'secondary';
  type?: 'solid' | 'outline' | 'link';
}

const Button: React.StatelessComponent<Props> = props => {
  const classStr = classNames('Button', props.className, {
    'Button--primary': props.theme === 'primary',
    'Button--secondary': props.theme === 'secondary',
    'Button--solid': props.type === 'solid',
    'Button--outline': props.type === 'outline',
    'Button--link': props.type === 'link'
  });

  return (
    <button className={classStr} onClick={props.onClick} onMouseDown={props.onMouseDown}>
      {props.iconLeft && <span className="Button__icon-left">{props.iconLeft()}</span>}
      {props.children}
      {props.iconRight && <span className="Button__icon-right">{props.iconRight()}</span>}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  type: 'solid'
};

export default Button;
