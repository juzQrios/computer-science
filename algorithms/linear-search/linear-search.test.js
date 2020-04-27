import linearSearch from "./linear-search";

const array = [2, 10, 7, 5, 24, 11, 6];

test("Successful Linear Search", () => {
  expect(linearSearch(array, 7)).toBe(2);
});

test("Unsuccessful Linear Search", () => {
  expect(linearSearch(array, 1)).toBe(-1);
});
