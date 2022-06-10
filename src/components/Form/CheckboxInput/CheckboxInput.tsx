import { ComponentPropsWithoutRef } from 'react';
import { Field, FieldInputProps, FieldAttributes } from 'formik';

import s from './CheckboxInput.module.css';

type Props = ComponentPropsWithoutRef<'input'> & {
  field?: FieldInputProps<string | number>;
  label?: string | React.ReactNode;
};

function CheckboxInput(props: Props) {
  const { field, label } = props;

  const inputProps = {
    ...field,
    ...props,
  };

  return (
    <label className={s.container}>
      <span className={s.label}>{label}</span>
      <input type="checkbox" {...inputProps} checked={!!field?.value} />
      <span className={s.checkmark} />
    </label>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CheckboxInputWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={CheckboxInput} />;
}
