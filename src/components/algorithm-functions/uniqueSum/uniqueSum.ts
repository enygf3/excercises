const uniqueSum = (arr: Array<any>): any => {
  if (
    Array.isArray(arr) &&
    !arr.includes(NaN) &&
    !arr.includes(undefined) &&
    !arr.includes(null)
  ) {
    return Array.from(new Set(arr)).reduce(
      (previousValue: any, currentValue: any) => previousValue + currentValue
    );
  } else {
    return null;
  }
};

export default uniqueSum;
