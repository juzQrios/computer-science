import selectionSort from './selection-sort';

const array1 = [25, 15, 5, 2, 10, 9];
const array2 = [25, 15, 5, 0, 10, 9];
const array3 = [25, -15, 5, 0, -25, 9];

describe('Selection sort', () => {
  test('should sort passed array', () => {
    expect(selectionSort(array1)).toStrictEqual([2, 5, 9, 10, 15, 25]);
  });
  test('should sort passed array', () => {
    expect(selectionSort(array2)).toStrictEqual([0, 5, 9, 10, 15,25]);
  });
  test('should sort passed array', () => {
    expect(selectionSort(array3)).toStrictEqual([-25, -15, 0, 5, 9, 25]);
  });
});
