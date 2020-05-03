import linearSearch from "./linear-search";

const array = [2, 10, 7, 5, 24, 11, 6];

describe('Linear search', () => {
  test("should return target index if found", () => {
    expect(linearSearch(array, 7)).toBe(2);
  });

  test("should return -1 if target not found", () => {
    expect(linearSearch(array, 1)).toBe(-1);
  });
});
