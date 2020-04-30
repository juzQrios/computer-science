import reverseString1 from './1';
import reverseString2 from './2';
import reverseString3 from './3';


// Built-in functions
test('should reverse passed string', () => {
  expect(reverseString1('Hello')).toBe('olleH');
});

// Decrementing loop concatination
test('should reverse passed string', () => {
  expect(reverseString2('Hello')).toBe('olleH');
});

// Array mirror swap - odd length
test('should reverse passed string', () => {
  expect(reverseString2('Hello')).toBe('olleH');
});

// Array mirror swap - even length
test('should reverse passed string', () => {
  expect(reverseString2('AllMight')).toBe('thgiMllA');
});