import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal from './Modal';
import Button from '../Button';

export default {
  title: 'Modal/Modal',
  component: Modal,
} as Meta;

const Template: Story<any> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onRequestClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        title="Modal Title"
        onRequestClose={onRequestClose}
        className="w-1/3"
      >
        <div className="p-3">Modal body</div>
        <div className="p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Modal>
    </div>
  );
};

export const Sample = Template.bind({});
