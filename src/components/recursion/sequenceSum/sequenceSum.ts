const sequenceSum = (begin: number, end: number, step: number): number => {
  if (begin < end) {
    return sequenceSum(begin + step, end, step);
  } else {
    return begin;
  }
};

export default sequenceSum;
