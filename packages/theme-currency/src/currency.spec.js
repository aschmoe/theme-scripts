import {formatMoney} from './currency';

describe('currency.formatMoney', () => {
  test('Formats a string of "10001" to a string of "$100.01"', () => {
    const value = formatMoney('10001');
    expect(value).toBe('$100.01');
  });

  test('Formats a number of 10001 to a string of "$100.01"', () => {
    const value = formatMoney(10001);
    expect(value).toBe('$100.01');
  });

  test('Formats a number of 1000001 to a string of "$10,000.01"', () => {
    const value = formatMoney(1000001);
    expect(value).toBe('$10,000.01');
  });

  test('Formats a number 1000001 to a string of "$10 000.01"', () => {
    const value = formatMoney(1000001, '${{amount_with_space_separator}}');
    expect(value).toBe('$10 000.01');
  });

  test('Formats a number 10001 to a string of "$100"', () => {
    const value = formatMoney(10001, '${{amount_no_decimals}}');
    expect(value).toBe('$100');
  });

  test('Formats a number 1000001 to a string of "$10,000"', () => {
    const value = formatMoney(
      1000001,
      '${{amount_no_decimals_with_comma_separator}}'
    );
    expect(value).toBe('$10,000');
  });

  test('Formats a number 1000001 to a string of "$10 000"', () => {
    const value = formatMoney(
      1000001,
      '${{amount_no_decimals_with_space_separator}}'
    );
    expect(value).toBe('$10 000');
  });
});
