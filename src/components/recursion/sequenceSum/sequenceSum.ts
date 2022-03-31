const sequenceSum = (begin: number, end: number, step: number): number => {
  if (begin <= end) {
    console.log(begin);
    return sequenceSum(begin + step, end, step);
  } else {
    return 0;
  }
};

export default sequenceSum;
