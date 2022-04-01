import sumAverage from "./sumAverage";

test("[1, 2, 3], [0, 0, 0] to be equal 1", () => {
  expect(sumAverage([1, 2, 3], [0, 0, 0])).toStrictEqual(1);
});

test("[-5, 14, 0], [6, 88, 1], [-10, -15, 3] to be equal 9", () => {
  expect(sumAverage([-5, 14, 0], [6, 88, 1], [-10, -15, 3])).toStrictEqual(9);
});
