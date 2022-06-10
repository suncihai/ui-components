import * as Yup from 'yup';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form } from 'formik';

import MaskedInput from './MaskedInput';

export default {
  title: 'Form/MaskedInput',
  component: MaskedInput,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { ssn: '' };

  const validationSchema = Yup.object({
    ssn: Yup.string().required('Required'),
  });

  const onSubmit = () => {
    alert('submited');
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <MaskedInput
            name="ssn"
            mask="999-99-9999"
            placeholder="Social Secruity #"
            initialValue={initialValues.ssn}
          />
        </Form>
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
