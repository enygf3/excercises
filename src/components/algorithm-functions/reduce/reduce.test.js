import reduce from "./reduce";

test("reduce([1, 2, 3], (acc, value) => acc * value, 1) to equal 6", () => {
  expect(reduce([1, 2, 3], (acc, value) => acc * value, 0)).toStrictEqual(6);
});

test("reduce([0], (acc, value) => acc * value, 1) to equal 0", () => {
  expect(reduce([0], (acc, value) => acc * value, 0)).toStrictEqual(0);
});

test("reduce([3, 3, 1], (acc, value) => acc / value, 1) to equal 1", () => {
  expect(reduce([3, 3, 1], (acc, value) => acc / value, 0)).toStrictEqual(1);
});

test("reduce([2, 15], (acc, value) => acc / value, 1) to equal 7.5", () => {
  expect(reduce([2, 15], (acc, value) => acc / value, 0)).toStrictEqual(7.5);
});

test("reduce([3, 2, 0], (acc, value) => acc + value, 1) to equal 5", () => {
  expect(reduce([3, 2, 0], (acc, value) => acc + value, 0)).toStrictEqual(5);
});
