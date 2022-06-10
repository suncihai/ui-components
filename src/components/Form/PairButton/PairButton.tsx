import { useState, useCallback } from 'react';
import { Field, FieldInputProps, FieldAttributes, FormikValues } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import Button from '@components/Button';

import s from './PairButton.module.css';

type PairButtonProps = {
  field?: FieldInputProps<string | number>;
  form?: FormikValues;
  validateOnChange?: boolean;
  labelOn?: string;
  labelOff?: string;
  defaultChecked?: boolean;
  setFieldValue?: (
    field: string,
    value: boolean,
    shouldValidate?: boolean
  ) => void;
};

function PairButton(props: PairButtonProps) {
  const {
    field,
    form,
    defaultChecked = null,
    validateOnChange = true,
    setFieldValue,
    labelOn = 'Yes',
    labelOff = 'No',
  } = props;
  const { errors, touched } = form;
  const [checked, setChecked] = useState<boolean | null>(defaultChecked);

  const error = errors[field.name];
  const hasError = touched[field.name] && error;

  const toggle = useCallback(
    (value) => {
      setChecked(value);
      setFieldValue(field?.name as string, value);
      if (validateOnChange) {
        setTimeout(() => form.validateField(field.name));
      }
    },
    [field.name, form, setFieldValue, validateOnChange]
  );

  return (
    <>
      <div className={s.container}>
        <Button
          style="secondary"
          size="lg"
          className={
            hasError ? s.errorButton : checked ? s.buttonChecked : s.button
          }
          onClick={() => toggle(true)}
        >
          {checked && <FontAwesomeIcon icon={faCheck} className={s.icon} />}
          {labelOn}
        </Button>
        <Button
          style="secondary"
          size="lg"
          className={
            hasError
              ? s.errorButton
              : checked === false
              ? s.buttonChecked
              : s.button
          }
          onClick={() => toggle(false)}
        >
          {checked === false && (
            <FontAwesomeIcon icon={faCheck} className={s.icon} />
          )}
          {labelOff}
        </Button>
      </div>
      {hasError ? <p className={s.error}>{error}</p> : null}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PairButtonWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={PairButton} />;
}
