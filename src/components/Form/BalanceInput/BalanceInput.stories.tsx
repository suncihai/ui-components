import * as Yup from 'yup';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form } from 'formik';

import BalanceInput from './BalanceInput';

export default {
  title: 'Form/BalanceInput',
  component: BalanceInput,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { amount: '$0.00' };

  const validationSchema = Yup.object({
    birthday: Yup.string().required('Required'),
  });

  const onSubmit = () => {
    alert('submited');
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <BalanceInput name="amount" initialValue={initialValues.amount} />
        </Form>
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
