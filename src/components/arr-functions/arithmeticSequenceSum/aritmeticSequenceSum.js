const arithmeticSequenceSum = (a, r, n) => {
  let value = 0;

  for (let i = 0; i < n; i++) {
    value += a;
  }

  for (let i = 1; i <= n - 1; i++) {
    value += r * i;
  }

  return value;
};

export default arithmeticSequenceSum;
