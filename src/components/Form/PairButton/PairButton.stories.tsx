import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form, FormikProps } from 'formik';
import PairButton from './PairButton';

export default {
  title: 'Form/PairButton',
  component: PairButton,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { testing: true };

  const onSubmit = () => {
    alert('submitted');
  };

  return (
    <div style={{ maxWidth: 550 }}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {(formikProps: FormikProps<{ testing: boolean }>) => {
          const { setFieldValue } = formikProps;
          return (
            <Form>
              <PairButton name="testing" setFieldValue={setFieldValue} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
