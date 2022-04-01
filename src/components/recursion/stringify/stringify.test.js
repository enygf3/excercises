import stringify from "./stringify";
import { Node } from "./stringify";

test("to be equal 3", () => {
  expect(stringify(new Node(1, new Node(2, new Node(3, null))))).toStrictEqual(
    3
  );
});

test("to be equal 1", () => {
  expect(stringify(new Node(1, null))).toStrictEqual(1);
});

test("to be equal 16", () => {
  expect(
    stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))
  ).toStrictEqual(16);
});
