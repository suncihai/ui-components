import { Story, Meta } from '@storybook/react/types-6-0';
import ThreeDots from './ThreeDots';

export default {
  title: 'Components/ThreeDots',
  component: ThreeDots,
} as Meta;

const Template: Story<any> = (args) => <ThreeDots {...args} />;

export const Sample = Template.bind({});
