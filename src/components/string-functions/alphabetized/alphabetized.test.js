import alphabetized from "./alphabetized";

test("hello to be equal 'ehllo'", () => {
  expect(alphabetized("hello")).toStrictEqual("ehllo");
});

test("null to be equal ''", () => {
  expect(alphabetized(null)).toStrictEqual("");
});

test("NaN to be equal ''", () => {
  expect(alphabetized(NaN)).toStrictEqual("");
});

test("undefined to be equal ''", () => {
  expect(alphabetized(undefined)).toStrictEqual("");
});

test("abcdefghijklmnop to be equal 'abcdefghijklmnop'", () => {
  expect(alphabetized("abcdefghijklmnop")).toStrictEqual("abcdefghijklmnop");
});

test("'' to be equal ''", () => {
  expect(alphabetized("")).toStrictEqual("");
});

test("JAVASCRIPT to be equal 'AACIJPRSTV'", () => {
  expect(alphabetized("JAVASCRIPT")).toStrictEqual("AACIJPRSTV");
});
