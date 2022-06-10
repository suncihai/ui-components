import { Story, Meta } from '@storybook/react/types-6-0';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

const Template: Story<any> = (args) => <ToggleSwitch {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  onToggle: (toggleValue: boolean) => !toggleValue,
};
