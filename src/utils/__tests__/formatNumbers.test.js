/**
 * @jest-environment jsdom
 */
import formatNumbers from '../formatNumbers';

describe('formatNumbers', () => {
  it('Should return a comma-formatted string', async () => {
    expect(formatNumbers(1)).toBe('1');
    expect(formatNumbers(12)).toBe('12');
    expect(formatNumbers(123)).toBe('123');
    expect(formatNumbers(1234)).toBe('1,234');
    expect(formatNumbers(12345)).toBe('12,345');
    expect(formatNumbers(123456)).toBe('123,456');
    expect(formatNumbers(1234567)).toBe('1,234,567');
    expect(formatNumbers(12345678)).toBe('12,345,678');
    expect(formatNumbers(123456789)).toBe('123,456,789');
    expect(formatNumbers(1234567890)).toBe('1,234,567,890');
  });

  it('Should return millified string if over given level', async () => {
    expect(formatNumbers(1, 'thousands', 2)).toBe('1.00');
    expect(formatNumbers(12, 'thousands', 2)).toBe('12.00');
    expect(formatNumbers(123, 'thousands', 2)).toBe('123.00');
    expect(formatNumbers(1234, 'thousands', 2)).toBe('1.23K');
    expect(formatNumbers(12345, 'thousands', 2)).toBe('12.35K');
    expect(formatNumbers(12345, 'thousands', 3)).toBe('12.345K');
    expect(formatNumbers(123456, 'thousands', 2)).toBe('123.46K');
    expect(formatNumbers(123456, 'thousands', 3)).toBe('123.456K');

    expect(formatNumbers(123456, 'millions', 2)).toBe('123,456.00');
    expect(formatNumbers(1234567, 'millions', 2)).toBe('1.23M');
    expect(formatNumbers(1234567890, 'millions', 2)).toBe('1.23B');
    expect(formatNumbers(1234567890123, 'millions', 2)).toBe('1.23T');
  });
});
