const arithmeticSequenceSum = (a, r, n) => {
  return Array.from(Array(n).keys()).map((item) => a + item * r);
};

export default arithmeticSequenceSum;
