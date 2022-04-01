import arithmeticSequenceSum from "./arithmeticSequenceSum";

test("1, 2, 3 to be equal 9", () => {
  expect(arithmeticSequenceSum(1, 2, 3)).toStrictEqual(9);
});

test("10, 1, 5 to be equal 60", () => {
  expect(arithmeticSequenceSum(10, 1, 5)).toStrictEqual(60);
});

test("0, 3, 5 to be equal 15", () => {
  expect(arithmeticSequenceSum(0, 3, 5)).toStrictEqual(30);
});

test("2, 0, 5 to be equal 10", () => {
  expect(arithmeticSequenceSum(2, 0, 5)).toStrictEqual(10);
});
