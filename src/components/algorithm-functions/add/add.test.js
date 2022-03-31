import add from "./add";

test("addThree(3), add(1) to equal 4", () => {
  const addThree = add(3);
  expect(addThree(1)).toStrictEqual(4);
});

test("addZero(0), add(0) to equal 0", () => {
  const addZero = add(0);
  expect(addZero(0)).toStrictEqual(0);
});

test("addHundred(100), add(-100) to equal 0", () => {
  const addHundred = add(100);
  expect(addHundred(-100)).toStrictEqual(0);
});

test("addThousand(1000), add(-99999) to equal -98999", () => {
  const addThousand = add(1000);
  expect(addThousand(-99999)).toStrictEqual(-98999);
});
