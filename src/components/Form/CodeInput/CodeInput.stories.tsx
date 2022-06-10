import { useRef, useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CodeInput from './CodeInput';

export default {
  title: 'Form/CodeInput',
  component: CodeInput,
} as Meta;

const Template: Story<any> = () => {
  const inputOne = useRef<HTMLInputElement>(null);
  const inputTwo = useRef<HTMLInputElement>(null);
  const inputThree = useRef<HTMLInputElement>(null);
  const inputFour = useRef<HTMLInputElement>(null);
  const inputFive = useRef<HTMLInputElement>(null);
  const inputSix = useRef<HTMLInputElement>(null);
  const INPUTS = [
    inputOne,
    inputTwo,
    inputThree,
    inputFour,
    inputFive,
    inputSix,
  ];

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      const { maxLength, value, name } = e.target;
      const inputFilled = value.length >= maxLength;

      if (!inputFilled) {
        return;
      }

      switch (name) {
        case 'input-0':
          inputTwo?.current?.focus();
          break;
        case 'input-1':
          inputThree?.current?.focus();
          break;
        case 'input-2':
          inputFour?.current?.focus();
          break;
        case 'input-3':
          inputFive?.current?.focus();
          break;
        case 'input-4':
          inputSix?.current?.focus();
          break;

        default:
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div style={{ maxWidth: 300 }}>
      <div className="flex justify-center gap-x-3 pt-[50px]">
        {INPUTS.map((input, index) => {
          return (
            <CodeInput
              key={index}
              onChange={handleChange}
              name={`input-${index}`}
              ref={input}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Sample = Template.bind({});
