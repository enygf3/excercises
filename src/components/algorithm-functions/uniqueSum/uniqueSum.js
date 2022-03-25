const uniqueSum = (arr) => {
  return Array.from(new Set(arr)).reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

export default uniqueSum;
