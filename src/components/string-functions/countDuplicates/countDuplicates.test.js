import countDuplicates from "./countDuplicates";

test("hello to be equal 1", () => {
  expect(countDuplicates("hello")).toStrictEqual(1);
});

test("111111111 to be equal 1", () => {
  expect(countDuplicates("1111111111")).toStrictEqual(9);
});

test("abcde to be equal 0", () => {
  expect(countDuplicates("abcde")).toStrictEqual(0);
});

test("null to be equal 0", () => {
  expect(countDuplicates(null)).toStrictEqual(0);
});

test("NaN to be equal 0", () => {
  expect(countDuplicates(NaN)).toStrictEqual(0);
});

test("undefined to be equal 0", () => {
  expect(countDuplicates(undefined)).toStrictEqual(0);
});
