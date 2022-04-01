const sumAverage = (...arr: Array<any>): any => {
  return Math.floor(
    arr
      .map(
        (item: any) =>
          item.reduce((prev: any, current: any) => prev + current, 0) /
          item.length
      )
      .reduce((prev: any, curr: any) => prev + curr) / arr.length
  );
};

export default sumAverage;
