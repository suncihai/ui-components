import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useCallback,
  useRef,
  useState,
  useMemo,
} from 'react';
import classNames from 'classnames';
import { FormikValues, FieldInputProps } from 'formik';

import s from './InputBase.module.css';

export type InputBaseProps = ComponentPropsWithoutRef<'input'> & {
  validateOnChange?: boolean;
  field?: FieldInputProps<string | number>;
  initialValue?: string;
  form?: FormikValues;
};

export default function InputBase(props: InputBaseProps) {
  const {
    field,
    form,
    placeholder,
    validateOnChange = true,
    initialValue,
    ...rest
  } = props;
  const { errors, touched } = form;
  const { name, value } = field;

  const inputProps = useMemo(
    () => ({
      ...field,
      ...rest,
      placeholder: '',
    }),
    [field, rest]
  );

  const ref = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { onChange } = inputProps;
      if (typeof onChange === 'function') {
        onChange(e);
        setIsActive(true);
      }
      if (validateOnChange) {
        setTimeout(() => form.validateField(field.name));
      }
    },
    [field.name, form, inputProps, validateOnChange]
  );

  const handleClickLabel = useCallback(() => {
    ref.current?.focus();
  }, []);

  const error = errors[field.name];
  const hasError = touched[field.name] && error;

  return (
    <div className={classNames(s.textField, hasError && s.error)}>
      <input
        {...inputProps}
        onChange={handleChange}
        className={s.input}
        autoComplete="none"
        ref={ref}
      />
      <label
        htmlFor={name}
        className={classNames(
          s.label,
          ((!isActive && initialValue) || value) && s.labelActive
        )}
        onClick={handleClickLabel}
      >
        {hasError ? error : placeholder}
      </label>
    </div>
  );
}
