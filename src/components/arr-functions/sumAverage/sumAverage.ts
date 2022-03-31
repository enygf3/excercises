const sumAverage = (...arr: Array<any>): number => {
  return arr.reduce(
    (previousValue: any, currentValue: any, index: number, array: Array<any>) =>
      currentValue.reduce((previousValue: number, currentValue: number) =>
        Math.floor(currentValue + previousValue)
      ) / array.length
  );
};

export default sumAverage;
