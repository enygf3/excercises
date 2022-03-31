const arithmeticSequenceSum = (a: number, r: number, n: number): number => {
  return Array.from(Array(n).keys()).reduce(
    (acc: number, item: number) => a + acc + item * r,
    0
  );
};

export default arithmeticSequenceSum;
