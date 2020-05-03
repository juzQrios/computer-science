import iterativeBinarySearch from './iterative';
import recursiveBinarySearch from './recursive';

const single = [10];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


//--- Iterative ---//
describe('Iterative binary search', () => {
  test('should return target index if found', () => {
    expect(iterativeBinarySearch(array, 2)).toBe(1);
  });

  test('should return target index if found', () => {
    expect(iterativeBinarySearch(primes, 73)).toBe(20);
  });

  test('should return -1 if target not found', () => {
    expect(iterativeBinarySearch(primes, 72)).toBe(-1);
  });

  test('should return -1 if target not found', () => {
    expect(iterativeBinarySearch(single, 72)).toBe(-1);
  });

  test('should return target index if found', () => {
    expect(iterativeBinarySearch(single, 10)).toBe(0);
  });
});

//--- Recursive ---//
describe('Recursive binary search', () => {
  test('should return target index if found', () => {
    expect(recursiveBinarySearch(array, 2)).toBe(1);
  });

  test('should return target index if found', () => {
    expect(recursiveBinarySearch(primes, 73)).toBe(20);
  });

  test('should return -1 if target not found', () => {
    expect(recursiveBinarySearch(primes, 72)).toBe(-1);
  });

  test('should return -1 if target not found', () => {
    expect(recursiveBinarySearch(single, 72)).toBe(-1);
  });

  test('should return target index if found', () => {
    expect(recursiveBinarySearch(single, 10)).toBe(0);
  });
});
