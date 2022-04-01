const maxTripletSum = (arr: Array<any>, count: number = 3): number => {
  return Array.from(
    new Set(arr.sort((a: number, b: number) => a - b).reverse())
  )
    .slice(0, count)
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
};

export default maxTripletSum;
