import sequenceSum from "./sequenceSum";

test("2, 2, 2 to be equal 2", () => {
  expect(sequenceSum(2, 2, 2)).toStrictEqual(2);
});

test("2, 4, 2 to be equal 4", () => {
  expect(sequenceSum(2, 4, 2)).toStrictEqual(4);
});

test("10, 500, 10 to be equal 500", () => {
  expect(sequenceSum(10, 500, 10)).toStrictEqual(500);
});

test("-8, 1, 1 to be equal 1", () => {
  expect(sequenceSum(-8, 1, 1)).toStrictEqual(1);
});
