const arithmeticSequenceSum = (a, r, n) => {
  return Array.from(Array(n).keys()).reduce(
    (acc, item) => a + acc + item * r,
    0
  );
};

export default arithmeticSequenceSum;
