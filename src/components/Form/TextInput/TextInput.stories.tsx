import * as Yup from 'yup';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form } from 'formik';

import Button from '@components/Button';
import TextInput from './TextInput';

export default {
  title: 'Form/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { user: '' };

  const validationSchema = Yup.object({
    user: Yup.string().required('Required'),
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
          <TextInput name="user" type="text" placeholder="user" />
          <Button type="submit" size="md">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
