import { Story, Meta } from '@storybook/react/types-6-0';

import { MobileProgressBar } from './ProgressBar';

export default {
  title: 'Components/MobileProgressBar',
  component: MobileProgressBar,
} as Meta;

const MobileTemplate: Story<any> = (args) => <MobileProgressBar {...args} />;

export const MobileSample = MobileTemplate.bind({});
MobileSample.args = {
  steps: ['phone', 'identity', 'personal'],
  current: 1,
};
