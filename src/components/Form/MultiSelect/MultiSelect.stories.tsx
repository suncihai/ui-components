import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik, Form, FormikProps } from 'formik';
import MultiSelect from './MultiSelect';

export default {
  title: 'Form/MultiSelect',
  component: MultiSelect,
} as Meta;

const Template: Story<any> = () => {
  const initialValues = { testing: '' };

  const onSubmit = () => {
    alert('submitted');
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {(formikProps: FormikProps<{ testing: string }>) => {
          const { setFieldValue } = formikProps;
          return (
            <Form>
              <MultiSelect
                name="testing"
                options={['option1', 'option2', 'option3']}
                setFieldValue={setFieldValue}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export const Sample = Template.bind({});
