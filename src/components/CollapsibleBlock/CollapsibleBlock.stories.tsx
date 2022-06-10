import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CollapsibleBlock from './CollapsibleBlock';

export default {
  title: 'Components/CollapsibleBlock',
  component: CollapsibleBlock,
} as Meta;

const Template: Story<any> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => setIsOpen((value) => !value);

  return (
    <div style={{ width: 400 }}>
      <div onClick={onClick} className="cursor-pointer">
        Click me to show{' '}
      </div>
      <CollapsibleBlock isOpen={isOpen}>
        CollapsibleBlock Content
      </CollapsibleBlock>
    </div>
  );
};

export const Sample = Template.bind({});
