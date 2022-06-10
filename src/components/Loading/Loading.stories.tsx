import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Loading, { LoadingProps } from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

// Reuse that template for creating different stories
export const Sample = Template.bind({});
