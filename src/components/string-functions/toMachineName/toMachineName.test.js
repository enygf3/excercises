import toMachineName from "./toMachineName";

test("HELLO.WORLD to be equal hello-world", () => {
  expect(toMachineName("HELLO.WORLD", "-")).toStrictEqual("hello-world");
});

test("'123qwert pob' to be equal qwert-pob", () => {
  expect(toMachineName("123qwert pob", "-")).toStrictEqual("qwert-pob");
});

test("1234 to be equal ''", () => {
  expect(toMachineName("1234", "-")).toStrictEqual("");
});

test("'Lorem        ipsum sit                                 DOLOR' to be equal 'lorem-ipsum-sit-dolor'", () => {
  expect(
    toMachineName(
      "Lorem        ipsum sit                                 DOLOR",
      "-"
    )
  ).toStrictEqual("lorem-ipsum-sit-dolor");
});
