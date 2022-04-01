import maxTripletSum from "./maxTripletSum";

test("[1, 2, 3, 4, 5] to be equal '12'", () => {
  expect(maxTripletSum([1, 2, 3, 4, 5])).toStrictEqual(12);
});

test("[9, 10, 4, 10, 10, 8] to be equal '27'", () => {
  expect(maxTripletSum([9, 10, 4, 10, 10, 8])).toStrictEqual(27);
});

test("[0, -1, 66, 3] to be equal '69'", () => {
  expect(maxTripletSum([0, -1, 66, 3])).toStrictEqual(69);
});

test("[0, -1, 66, 3, -920, 32, 10, 0, 55, 4567] to be equal '4688'", () => {
  expect(
    maxTripletSum([0, -1, 66, 3, -920, 32, 10, 0, 55, 4567])
  ).toStrictEqual(4688);
});
