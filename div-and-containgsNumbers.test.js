// div-and-containsNumbers.test.js

const { div, containsNumbers } = require('./div-and-containsNumbers'); // Adjust the filename to match your file

// Test cases for the `div` function
describe('div function', () => {
  test('divides positive numbers correctly', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('divides negative numbers correctly', () => {
    expect(div(-10, 2)).toBe(-5);
  });

  test('returns Infinity when dividing by 0', () => {
    expect(div(10, 0)).toBe(Infinity);
  });

  test('returns NaN when dividing 0 by 0', () => {
    expect(div(0, 0)).toBeNaN();
  });

  test('returns 0 when numerator is 0', () => {
    expect(div(0, 5)).toBe(0);
  });
});

// Test cases for the `containsNumbers` function
describe('containsNumbers function', () => {
  test('returns true when the string contains numbers', () => {
    expect(containsNumbers('hello123')).toBe(true);
  });

  test('returns false when the string does not contain numbers', () => {
    expect(containsNumbers('hello')).toBe(false);
  });

  test('returns true for a string with only numbers', () => {
    expect(containsNumbers('123456')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(containsNumbers('')).toBe(false);
  });

  test('returns true for strings with special characters and numbers', () => {
    expect(containsNumbers('@#$%^1&*()')).toBe(true);
  });

  test('returns false for strings with only special characters', () => {
    expect(containsNumbers('!@#$%^&*()')).toBe(false);
  });
});

