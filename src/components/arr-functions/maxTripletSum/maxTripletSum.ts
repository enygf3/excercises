const maxTripletSum = (arr: Array<any>, count: number): number => {
  return Array.from(new Set(arr.sort().reverse()))
    .slice(0, count)
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
};

export default maxTripletSum;
