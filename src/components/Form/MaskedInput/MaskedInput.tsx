import { useCallback, useState, ComponentPropsWithoutRef } from 'react';
import InputMask from 'react-input-mask';
import { Field, FieldAttributes, FormikValues, FieldInputProps } from 'formik';

import InputBase from '../InputBase';

type MaskedInputProps = ComponentPropsWithoutRef<'input'> & {
  validateOnChange?: boolean;
  field?: FieldInputProps<string | number>;
  initialValue?: string;
  form?: FormikValues;
};

function MaskedInput(props: MaskedInputProps) {
  const {
    field,
    form,
    placeholder,
    validateOnChange = true,
    initialValue = '',
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const onChange = useCallback(
    (e) => {
      form?.setFieldValue(field?.name, e.target.value);
      setInputValue(e.target.value);
      if (validateOnChange) {
        setTimeout(() => form.validateField(field.name));
      }
    },
    [form, field.name, validateOnChange]
  );

  const inputProps = {
    field,
    form,
    initialValue: inputValue,
    onChange, //react-input-mask must put onChange into its InputMask component level props, otherwise will not work, see docs
    placeholder,
    value: inputValue,
    ...rest,
  };

  return (
    // @ts-ignore
    <InputMask {...inputProps}>{(props) => <InputBase {...props} />}</InputMask>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MaskedInputWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={MaskedInput} />;
}
