import millify from 'millify';

export type Abbreviations =
  | 'thousands'
  | 'millions'
  | 'billions'
  | 'trillions'
  | 'Infinity';

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const ABBREVIATIONS = {
  thousands: 1000,
  millions: 1000000,
  billions: 1000000000,
  trillions: 1000000000000,
  Infinity: Infinity,
};
/* eslint-enable sort-keys-fix/sort-keys-fix */

/**
 * @param original original value (number or stringified number)
 * @param abbreviateFrom abbreviate/millify starting from this amount
 * @param precision number of decimal places to show
 * @returns commified or abbreviated value
 * @example formatNumbers(123) // 123
 * @example formatNumbers(1234) // '1,234'
 * @example formatNumbers(1234, 'thousands', 2) // '1.23K'
 * @example formatNumbers(1234, 'millions', 2) // '1,234'
 * @example formatNumbers(1234567, 'millions', 2) // '1.23M'
 * @example formatNumbers(1234567890, 'millions', 2) // '1.23B'
 * @example formatNumbers(1234567890, 'billions', 2) // '1.23B'
 * @example formatNumbers(1234567890123, 'trillions', 2) // '1.23T'
 */

function addCommas(num: number, minimumFractionDigits?: number): string {
  return num || num === 0
    ? num.toLocaleString('en-US', { minimumFractionDigits })
    : '';
}

export default function formatNumbers(
  original: number | string,
  abbreviateFrom: Abbreviations = 'Infinity',
  precision: number
): string {
  const value = Number(original) || 0;

  return value >= ABBREVIATIONS[abbreviateFrom]
    ? millify(value, { precision })
    : addCommas(parseFloat(value.toFixed(2)), precision);
}
