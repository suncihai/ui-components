import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form, FormikProps } from 'formik';
import ToggleRadio from './ToggleRadio';

export default {
  title: 'Form/ToggleRadio',
  component: ToggleRadio,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { testing: true };

  const onSubmit = () => {
    alert('submitted');
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {(formikProps: FormikProps<{ testing: boolean }>) => {
        const { setFieldValue } = formikProps;
        return (
          <Form>
            <ToggleRadio name="testing" setFieldValue={setFieldValue} />
          </Form>
        );
      }}
    </Formik>
  );
};

export const Sample = Template.bind({});
