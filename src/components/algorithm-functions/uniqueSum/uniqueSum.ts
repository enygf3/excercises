const uniqueSum = (arr: Array<any>): any => {
  return Array.from(new Set(arr)).reduce(
    (previousValue: any, currentValue: any) => previousValue + currentValue
  );
};

export default uniqueSum;
