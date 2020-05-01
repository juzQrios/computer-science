import binarySearch1 from './1';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

test('should return target index', () => {
  expect(binarySearch1(array, 2)).toBe(1);
});

test('should return target index', () => {
  expect(binarySearch1(primes, 73)).toBe(20);
});

test('should return -1', () => {
  expect(binarySearch1(primes, 72)).toBe(-1);
});
