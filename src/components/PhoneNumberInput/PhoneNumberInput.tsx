import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';

import s from './PhoneNumberInput.module.css';

type PhoneNumberInputProps = {
  onSubmit: (phoneNumber: string) => void;
  status?: string;
};

// TODO: (mh 4/11/2022) This could definitely use a jest test to validate functionality: make sure it passes focus, make sure it accepts only valid chars, make sure it triggers the callback when done, etc. - Adam
export default function PhoneNumberInput(props: PhoneNumberInputProps) {
  const { onSubmit } = props;
  const countryCodeRef = useRef<HTMLInputElement>();
  const areaCodeRef = useRef<HTMLInputElement>();
  const phonePrefixRef = useRef<HTMLInputElement>();
  const lineNumberRef = useRef<HTMLInputElement>();

  function handleInputChange(e: any) {
    e.preventDefault();
    const { maxLength, value, name } = e.target;
    const inputFilled = value.length >= maxLength;

    if (!inputFilled) {
      return;
    }

    switch (name) {
      case 'countryCode':
        areaCodeRef.current.focus();

        break;
      case 'areaCode':
        phonePrefixRef.current.focus();
        break;
      case 'phonePrefix':
        lineNumberRef.current.focus();
        break;

      default:
        break;
    }

    if (typeof onSubmit === 'function') {
      onSubmit(
        countryCodeRef.current.value +
          areaCodeRef.current.value +
          phonePrefixRef.current.value +
          lineNumberRef.current.value
      );
    }
  }

  useEffect(() => {
    areaCodeRef.current.focus();
  }, []);
  return (
    <form className={s.container} autoComplete="off">
      <FontAwesomeIcon className={s.icon} icon={faPlus} />
      <input
        className={s.input}
        type="tel"
        size={3}
        maxLength={3}
        pattern="^-?[0-9]\d*\.?\d*$"
        placeholder="001"
        name="countryCode"
        onChange={handleInputChange}
        autoFocus
        defaultValue={0o1}
        ref={countryCodeRef}
      />
      <FontAwesomeIcon className={s.icon} icon={faMinus} />

      <input
        className={s.input}
        type="tel"
        size={3}
        maxLength={3}
        pattern="^-?[0-9]\d*\.?\d*$"
        placeholder="555"
        name="areaCode"
        onChange={handleInputChange}
        ref={areaCodeRef}
      />
      <FontAwesomeIcon className={s.icon} icon={faMinus} />
      <input
        className={s.input}
        type="tel"
        size={3}
        maxLength={3}
        pattern="^-?[0-9]\d*\.?\d*$"
        placeholder="555"
        name="phonePrefix"
        onChange={handleInputChange}
        ref={phonePrefixRef}
      />
      <FontAwesomeIcon className={s.icon} icon={faMinus} />
      <input
        className={s.largeInput}
        type="tel"
        size={4}
        maxLength={4}
        pattern="^-?[0-9]\d*\.?\d*$"
        placeholder="5555"
        name="lineNumber"
        onChange={handleInputChange}
        ref={lineNumberRef}
      />
    </form>
  );
}
