import * as Yup from 'yup';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form } from 'formik';

import DateInput from './DateInput';

export default {
  title: 'Form/DateInput',
  component: DateInput,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { birthday: '08/08/1988' };

  const validationSchema = Yup.object({
    birthday: Yup.string().required('Required'),
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
          <DateInput
            name="birthday"
            placeholder="Date Of Birth"
            initialValue={initialValues.birthday}
          />
        </Form>
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
