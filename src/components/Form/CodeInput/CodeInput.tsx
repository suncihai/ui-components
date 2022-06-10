import { Ref, forwardRef } from 'react';

import classNames from 'classnames';
import s from './CodeInput.module.css';

type Props = {
  maxLength?: number;
  size?: number;
  type?: string;
  className?: string;
  onChange?: (e: any) => void;
  name?: string;
  error?: boolean;
  success?: boolean;
};

function CodeInput(props: Props, ref: Ref<HTMLInputElement>) {
  const {
    maxLength = 1,
    size = 1,
    type,
    className,
    onChange,
    name,
    error,
    success,
  } = props;

  return (
    <input
      ref={ref}
      onChange={onChange}
      className={classNames(
        s.input,
        success && s.success,
        error && s.error,
        className
      )}
      type={type}
      size={size}
      maxLength={maxLength}
      name={name}
    />
  );
}

export default forwardRef(CodeInput);
