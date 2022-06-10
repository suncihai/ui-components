import { Story, Meta } from '@storybook/react/types-6-0';

import PhoneNumberInput from './PhoneNumberInput';

export default {
  title: 'Components/PhoneNumberInput',
  component: PhoneNumberInput,
} as Meta;

const Template: Story<any> = () => {
  return (
    <div style={{ width: 400 }}>
      <PhoneNumberInput onSubmit={() => {}} />
    </div>
  );
};

export const Sample = Template.bind({});
