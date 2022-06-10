import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useCallback,
  useState,
  useRef,
} from 'react';
import classNames from 'classnames';
import { Field, FormikValues, FieldInputProps, FieldAttributes } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/pro-solid-svg-icons';

import s from './TextInput.module.css';

type Props = ComponentPropsWithoutRef<'input'> & {
  showAsError?: boolean;
  showError?: boolean;
  validateOnChange?: boolean;
  field?: FieldInputProps<string | number>;
  form?: FormikValues;
  note?: string;
  autoComplete?: string;
  autoUpperCase?: boolean;
  onFocus?: (input: string) => void;
  onBlur?: (input: string) => void;
  style?: 'default' | 'border';
};

const PASSWORD = 'password';
const TEXT = 'text';

function TextInput(props: Props) {
  const {
    field,
    form,
    placeholder,
    note,
    type: initialType,
    showError = true,
    autoComplete = 'on',
    validateOnChange = true,
    autoUpperCase = false,
    showAsError,
    onFocus,
    onBlur,
    style = 'default',
    ...rest
  } = props;
  const { errors, touched } = form;
  const { name, value } = field;

  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState(initialType);

  const inputProps = {
    ...field,
    ...rest,
    placeholder: '',
  };

  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { onChange } = inputProps;
      if (autoUpperCase) {
        e.target.value = e.target.value.toUpperCase();
      }
      if (typeof onChange === 'function') {
        onChange(e);
      }
      if (validateOnChange) {
        setTimeout(() => form.validateField(field.name));
      }
    },
    [autoUpperCase, field.name, form, inputProps, validateOnChange]
  );

  const handleBlur = useCallback(() => {
    if (typeof onBlur === 'function') {
      onBlur(field.name);
    }
  }, [field?.name, onBlur]);

  const handleFocus = useCallback(() => {
    if (typeof onFocus === 'function') {
      onFocus(field.name);
    }
  }, [field?.name, onFocus]);

  const handleToggleShowPassword = useCallback(() => {
    setShowPassword((oldValue) => {
      setType(oldValue ? PASSWORD : TEXT);
      return !oldValue;
    });
  }, []);

  const handleClickLabel = useCallback(() => {
    ref.current?.focus();
  }, []);

  const error = errors[field.name];
  const hasError = touched[field.name] && error;

  return (
    <div
      className={classNames(
        s.textField,
        s[style],
        (hasError || showAsError) && s.error
      )}
    >
      <input
        {...inputProps}
        type={type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={s.input}
        autoComplete={autoComplete}
        ref={ref}
      />
      <label
        htmlFor={name}
        className={classNames(s.label, value && s.labelActive)}
        onClick={handleClickLabel}
      >
        {showError && hasError ? error : placeholder}
      </label>
      {!!note && <span className={s.note}>{note}</span>}
      {initialType === PASSWORD && (
        <span onClick={handleToggleShowPassword} className={s.showPassword}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      )}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextInputWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={TextInput} />;
}
