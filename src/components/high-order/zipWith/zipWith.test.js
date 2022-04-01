import zipWith from "./zipWith";

test("Math.pow, [1, 2, 3], [0, 3, 3] to be equal [1, 8, 27]", () => {
  expect(zipWith(Math.pow, [1, 2, 3], [0, 3, 3])).toStrictEqual([1, 8, 27]);
});

test("Math.pow, [0, 0, 0], [0, 0, 0] to be equal [1, 1, 1]", () => {
  expect(zipWith(Math.pow, [0, 0, 0], [0, 0, 0])).toStrictEqual([1, 1, 1]);
});

test("Math.pow, [10, 10, 10, 10], [0, 1, 2] to be equal [1, 10, 100, 1000]", () => {
  expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2])).toStrictEqual([
    1, 10, 100,
  ]);
});

test("Math.pow, [10, 10, 10], [0, 1, 2, 3] to be equal [1, 10, 100, 1000]", () => {
  expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2])).toStrictEqual([
    1, 10, 100,
  ]);
});
