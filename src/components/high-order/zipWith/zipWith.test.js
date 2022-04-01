import zipWith from "./zipWith";

test("Math.pow, [1, 2, 3], [0, 3, 3] to be equal [1, 8, 27]", () => {
  expect(zipWith(Math.pow, [1, 2, 3], [0, 3, 3])).toEqual([1, 8, 27]);
});

test("Math.sqrt, [9, 81, 4] to be equal [3, 9, 2]", () => {
  expect(zipWith(Math.sqrt, [9, 81, 4])).toEqual([3, 9, 2]);
});

test("Math.abs, [80, -1, -32, 0] to be equal [80, 1, 32, 0]", () => {
  expect(zipWith(Math.abs, [80, -1, -32, 0])).toEqual([80, 1, 32, 0]);
});

test("[80, -1, -32, 0] to be equal []", () => {
  expect(zipWith([80, -1, -32, 0])).toEqual([]);
});

test("'' to be equal []", () => {
  expect(zipWith()).toEqual([]);
});
