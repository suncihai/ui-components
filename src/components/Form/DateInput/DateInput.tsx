import { useCallback, useState, ComponentPropsWithoutRef } from 'react';
import { Field, FieldAttributes, FormikValues, FieldInputProps } from 'formik';

import InputBase from '../InputBase';

type DateInputProps = ComponentPropsWithoutRef<'input'> & {
  validateOnChange?: boolean;
  field?: FieldInputProps<string | number>;
  initialValue?: string;
  form?: FormikValues;
};
const DATE = 'date';
const TEXT = 'text';

function DateInput(props: DateInputProps) {
  const { field, form, placeholder, ...rest } = props;
  const { value } = field;
  const [type, setType] = useState<string>(TEXT);

  const inputProps = {
    field,
    form,
    placeholder,
    ...rest,
  };

  const handleBlur = useCallback(() => {
    if (!value) {
      setType(TEXT);
    }
  }, [value]);

  const handleFocus = useCallback(() => {
    setType(DATE);
  }, []);

  return (
    <InputBase
      {...inputProps}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={type}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DateInputWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={DateInput} />;
}
