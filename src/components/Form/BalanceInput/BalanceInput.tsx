import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { Field, FieldAttributes, FormikValues, FieldInputProps } from 'formik';
import { allowedInputKey, formatBalanceInput } from './balanceInput.utils';

import s from './BalanceInput.module.css';

type BalanceInputProps = ComponentPropsWithoutRef<'input'> & {
  validateOnChange?: boolean;
  field?: FieldInputProps<string | number>;
  initialValue?: string;
  inputMaxBalance?: string;
  resetInputMaxBalance?: () => void;
  form?: FormikValues;
};

function BalanceInput(props: BalanceInputProps) {
  const {
    field,
    form,
    initialValue = '',
    validateOnChange = true,
    inputMaxBalance,
    resetInputMaxBalance,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const inputProps = useMemo(
    () => ({
      ...field,
      ...rest,
    }),
    [field, rest]
  );

  const handleKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>
    ) => {
      const { keyCode } = e;
      if (!allowedInputKey.includes(keyCode)) {
        e.preventDefault();
        return;
      }

      const input = e.target.value;
      //if already input two decimals, prevent input more digits, only could delete
      if (
        input.lastIndexOf('.') > -1 &&
        input.length - input.lastIndexOf('.') > 2
      ) {
        if (keyCode !== 8) {
          e.preventDefault();
          return;
        }
      }

      //keyCode 190 is period, prevent two periods in number
      if (keyCode === 190) {
        if (input.includes('.')) {
          e.preventDefault();
          return;
        }
      }
    },
    []
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timerRef.current);
      if (typeof resetInputMaxBalance === 'function') {
        resetInputMaxBalance();
      }
      e.target.value = formatBalanceInput(e.target.value); //format from 123456.00 to $123,456.00
      const { onChange } = inputProps;
      if (typeof onChange === 'function') {
        onChange(e);
        setInputValue(e.target.value);
      }
      if (validateOnChange) {
        timerRef.current = setTimeout(() => form.validateField(field.name));
      }
    },
    [field.name, form, inputProps, resetInputMaxBalance, validateOnChange]
  );

  useEffect(() => {
    if (inputMaxBalance !== '') {
      setInputValue(inputMaxBalance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputMaxBalance]);

  return (
    <input
      {...inputProps}
      data-testid="balance-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={inputValue ?? ''}
      className={s.input}
      autoComplete="none"
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BalanceInputWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={BalanceInput} />;
}
