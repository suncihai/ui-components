import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Captcha, { CaptchaProps } from './Captcha';

export default {
  title: 'Components/Captcha',
  component: Captcha,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CaptchaProps> = (args) => <Captcha {...args} />;

// Reuse that template for creating different stories
export const Sample = Template.bind({});
Sample.args = { siteKey: '6LeeiLgUAAAAAMyy-0Sh8Z0AehDDmeuE2vUYaPPc' };
