import flattenAndSort from "./flattenAndSort";

test("[0, 0, 0] to equal [0, 0, 0]", () => {
  expect(flattenAndSort([0, 0, 0])).toStrictEqual([0, 0, 0]);
});

test("[[], 98, 12, [44, 0], [345, 999, [1, 2, 3]]] to equal [0, 1, 2, 3, 12, 44, 98, 345, 999]", () => {
  expect(
    flattenAndSort([[], 98, 12, [44, 0], [345, 999, [1, 2, 3]]])
  ).toStrictEqual([0, 1, 2, 3, 12, 44, 98, 345, 999]);
});

test("null to equal null", () => {
  expect(flattenAndSort(null)).toStrictEqual(null);
});

test("[1, 2, undefined] to equal null", () => {
  expect(flattenAndSort([1, 2, undefined])).toStrictEqual(null);
});

test("[NaN, NaN, NaN] to equal null", () => {
  expect(flattenAndSort([NaN, NaN, NaN])).toStrictEqual(null);
});
