import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: 'Primary', size: 'md', style: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: 'Secondary',
  style: 'secondary',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark',
  style: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Light',
  style: 'light',
};

export const Pill = Template.bind({});
Pill.args = {
  children: 'Pill',
  style: 'pill',
};

export const Databox = Template.bind({});
Databox.args = {
  children: 'Databox',
  style: 'databox',
};

export const TradeApp = Template.bind({});
TradeApp.args = {
  children: 'Trade',
  style: 'tradeapp',
};
