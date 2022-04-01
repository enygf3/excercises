import multiplyAll from "./multiplyAll";

test("[1, 2, 3], 2 to equal [2, 4, 6]", () => {
  expect(multiplyAll([1, 2, 3], 2)).toStrictEqual([2, 4, 6]);
});

test("[0, 0, 0], 2 to equal [0, 0, 0]", () => {
  expect(multiplyAll([0, 0, 0], 2)).toStrictEqual([0, 0, 0]);
});

test("[10000, 20000, 30000], 100 to equal [1000000, 2000000, 3000000]", () => {
  expect(multiplyAll([10000, 20000, 30000], 100)).toStrictEqual([
    1000000, 2000000, 3000000,
  ]);
});

test("[-1, -1, -1], -9 to equal [9, 9, 9]", () => {
  expect(multiplyAll([-1, -1, -1], -9)).toStrictEqual([9, 9, 9]);
});
