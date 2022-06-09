import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import PremiumRoomButton, { PremiumRoomButtonProps } from './PremiumRoomButton';

export default {
  title: 'Components/PremiumRoomButton',
  component: PremiumRoomButton,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PremiumRoomButtonProps> = (args) => (
  <PremiumRoomButton {...args} />
);

// Reuse that template for creating different stories
export const DefaultPremiumRoomButton = Template.bind({});
DefaultPremiumRoomButton.args = { room: '' };
