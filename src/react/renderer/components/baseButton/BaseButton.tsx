/* eslint-disable react/require-default-props */
import React, { MouseEventHandler } from 'react';
import styles from './BaseButton.scss';

interface ButtonProps {
  children?: React.ReactNode;
  type?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton = (props: ButtonProps) => {
  const { children, type, width, height, disabled, onClick } = props;

  let btnStyle: any;

  switch (type) {
    case 'primary':
      btnStyle = styles['btn-containers-primary'];
      break;
    default:
      btnStyle = styles['btn-containers-default'];
      break;
  }

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
    >)?.(e);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={btnStyle}
      onClick={handleClick}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};

BaseButton.defaultProps = {
  disabled: false,
  type: 'default',
  width: 68,
  height: 34,
};

export default BaseButton;
