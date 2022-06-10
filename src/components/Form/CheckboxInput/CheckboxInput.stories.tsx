import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form } from 'formik';

import CheckboxInput from './CheckboxInput';

export default {
  title: 'Form/CheckboxInput',
  component: CheckboxInput,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { testing: false };

  const onSubmit = () => {
    alert('submitted');
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form>
          <CheckboxInput name="testing" label="Testing" />
        </Form>
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
