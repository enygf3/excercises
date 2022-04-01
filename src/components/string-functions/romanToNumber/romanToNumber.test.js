import romanToNumber from "./romanToNumber";

test("V to be equal 5", () => {
  expect(romanToNumber("V")).toStrictEqual(5);
});

test("MM to be equal 2000", () => {
  expect(romanToNumber("MM")).toStrictEqual(2000);
});

test("null to be equal 0", () => {
  expect(romanToNumber(null)).toStrictEqual(0);
});

test("'qwerty' to be equal 0", () => {
  expect(romanToNumber("qwerty")).toStrictEqual(0);
});

test("undefined to be equal 0", () => {
  expect(romanToNumber(undefined)).toStrictEqual(0);
});

test("NaN to be equal 0", () => {
  expect(romanToNumber(NaN)).toStrictEqual(0);
});
