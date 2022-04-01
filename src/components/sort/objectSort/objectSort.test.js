import objectSort from "./objectSort";

test("{ a: 1 }, { a: 2 }, { a: 3 } to be equal {a: 3}, {a: 2}, {a: 1}", () => {
  expect(objectSort([{ a: 1 }, { a: 2 }, { a: 3 }])).toStrictEqual([
    { a: 3 },
    { a: 2 },
    { a: 1 },
  ]);
});

test("{ a: 87 }, { a: -2 }, { a: 43 }, { a: 0} to be equal {a: 87}, {a: 43}, {a: 0}, {a: -2}", () => {
  expect(objectSort([{ a: 87 }, { a: -2 }, { a: 43 }, { a: 0 }])).toStrictEqual(
    [{ a: 87 }, { a: 43 }, { a: 0 }, { a: -2 }]
  );
});

test("{ a: 87, b: 1 }, { a: -2, b: -45 }, { a: 43, b: 10 }, { a: 0, b: 100} to be equal {a: 0, b: 100}, { a: 43, b: 10 }, { a: 87, b: 1 }, { a: -2, b: -45 }", () => {
  expect(
    objectSort(
      [
        { a: 87, b: 1 },
        { a: -2, b: -45 },
        { a: 43, b: 10 },
        { a: 0, b: 100 },
      ],
      "b"
    )
  ).toStrictEqual([
    { a: 0, b: 100 },
    { a: 43, b: 10 },
    { a: 87, b: 1 },
    { a: -2, b: -45 },
  ]);
});
