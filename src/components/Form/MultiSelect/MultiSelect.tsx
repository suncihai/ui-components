import { useState, useCallback } from 'react';
import { Field, FieldInputProps, FieldAttributes, FormikValues } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';

import s from './MultiSelect.module.css';

type MultiSelectProps = {
  field?: FieldInputProps<string | number>;
  form?: FormikValues;
  defaultChecked?: number | null;
  validateOnChange?: boolean;
  options: string[];
  setFieldValue?: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
};

function MultiSelect(props: MultiSelectProps) {
  const {
    field,
    form,
    defaultChecked,
    options,
    setFieldValue,
    validateOnChange = true,
  } = props;
  const { errors, touched } = form;
  const [checked, setChecked] = useState<number | null>(defaultChecked);

  const error = errors[field.name];
  const hasError = touched[field.name] && error;

  const onSelectOption = useCallback(
    (index) => {
      setFieldValue(field.name, options[index]);
      setFieldValue(`${field.name}_id`, index);
      setChecked(index);
      if (validateOnChange) {
        setTimeout(() => form.validateField(field.name));
      }
    },
    [field.name, form, options, setFieldValue, validateOnChange]
  );

  return (
    <div className={hasError ? s.errorContainer : s.container}>
      {hasError ? <p className={s.error}>{error}</p> : null}
      {options.map((option, index) => (
        <div
          key={option}
          className={hasError ? s.errorOption : s.option}
          onClick={() => onSelectOption(index)}
        >
          {option}
          {checked === index && (
            <FontAwesomeIcon icon={faCheck} className={s.icon} />
          )}
        </div>
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MultiSelectWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={MultiSelect} />;
}
