import reverseString1 from './1';
import reverseString2 from './2';

// Built-in functions
test('should reverse passed string', () => {
  expect(reverseString1('Hello')).toBe('olleH');
});

// decrementing loop concatination
test('should reverse passed string', () => {
  expect(reverseString2('Hello')).toBe('olleH');
});
