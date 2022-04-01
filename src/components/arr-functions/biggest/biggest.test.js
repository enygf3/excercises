import biggest from "./biggest";

test("[1, 2, 3, 4, 5] to be equal '54321'", () => {
  expect(biggest([1, 2, 3, 4, 5])).toStrictEqual("54321");
});

test("[100, 87, 0, 23] to be equal '87321000'", () => {
  expect(biggest([100, 87, 0, 23])).toStrictEqual("87321000");
});

test("[999, 863, 35, 8544] to be equal '999886554433'", () => {
  expect(biggest([999, 863, 35, 8544])).toStrictEqual("999886554433");
});
