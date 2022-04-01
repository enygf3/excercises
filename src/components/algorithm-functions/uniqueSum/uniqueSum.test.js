import uniqueSum from "./uniqueSum";

test("[0, 0, 0] to equal 0", () => {
  expect(uniqueSum([0, 0, 0])).toStrictEqual(0);
});

test("[1, 2, 3] to equal 6", () => {
  expect(uniqueSum([1, 2, 3])).toStrictEqual(6);
});

test("[-5, 0, 1] to equal -4", () => {
  expect(uniqueSum([-5, 0, 1])).toStrictEqual(-4);
});

test("[1000, 45988, 600] to equal 47588", () => {
  expect(uniqueSum([1000, 45988, 600])).toStrictEqual(47588);
});
