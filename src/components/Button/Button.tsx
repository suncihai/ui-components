import React from 'react';
import classNames from 'classnames';

import s from './Button.module.css';

export type ButtonProps = {
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  icon?: boolean;
  smIcon?: boolean;

  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>
  ) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?:
    | 'primary'
    | 'secondary'
    | 'plus'
    | 'tradeapp'
    | 'dark'
    | 'databox'
    | 'pill'
    | 'light'
    | 'underline';
  cypressId?: string;
  testId?: string;
  type?: 'button' | 'submit' | 'reset' | 'div' | 'a' | 'link';
  rounded?: boolean;
  target?: string;
};

/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
  const {
    alt,
    children,
    disabled,
    href = '/',
    icon,
    smIcon,
    onClick,
    size = 'md',
    style = 'primary',
    cypressId,
    testId,
    type = 'button',
    rounded = false,
    target,
  } = props;
  const className = classNames(
    s.button,
    s[size],
    s[style],
    disabled && s.disabled,
    props.className,
    icon && s.icon,
    smIcon && s.smIcon,
    rounded && s.rounded
  );

  return type === 'div' ? (
    <div
      onClick={onClick}
      title={alt}
      data-cy={cypressId}
      data-testid={testId}
      className={className}
    >
      {children}
    </div>
  ) : type === 'a' ? (
    <a
      onClick={onClick}
      title={alt}
      data-cy={cypressId}
      data-testid={testId}
      className={className}
      href={href}
      target={target}
    >
      {children}
    </a>
  ) : type === 'link' ? (
    <a
      onClick={onClick}
      title={alt}
      data-cy={cypressId}
      data-testid={testId}
      className={className}
    >
      {children}
    </a>
  ) : (
    <button
      className={className}
      onClick={onClick}
      type={type}
      title={alt}
      disabled={disabled}
      data-cy={cypressId}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

export default Button;
