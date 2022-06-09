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
CompactCard.args = {
  onRequestClose: () => {
    alert('onRequestClose');
  },
  children: (
    <div style={{ maxWidth: 300 }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  ),
};

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  type: 'default',
  onRequestClose: () => {
    alert('onRequestClose');
  },
  title: 'Card Title',
  children: (
    <div style={{ maxWidth: 300 }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  ),
};
