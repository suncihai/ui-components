import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Reuse that template for creating different stories
export const CompactCard = Template.bind({});
CompactCard.args = { children: 'Compact Card' };

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  children: 'Default Card',
  type: 'default',
  title: 'test title',
};
