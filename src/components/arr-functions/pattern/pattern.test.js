import pattern from "./pattern";

test("pattern(3) to equal ['123', '213', '312']", () => {
  expect(pattern(3)).toStrictEqual(["123", "231", "312"]);
});

test("pattern(0) to equal []", () => {
  expect(pattern(0)).toStrictEqual([]);
});

test("pattern(10) to equal ['123', '213', '312']", () => {
  expect(pattern(9)).toStrictEqual([
    "123456789",
    "234567891",
    "345678912",
    "456789123",
    "567891234",
    "678912345",
    "789123456",
    "891234567",
    "912345678",
  ]);
});
