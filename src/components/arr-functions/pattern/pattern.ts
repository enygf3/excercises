const pattern = (num: number): any => {
  return !(num > 0) && !(num < 10)
    ? null
    : Array.from(Array(num).keys())
        .map((x: number) => (++x).toString())
        .map(
          (item: string, index: number, arr: Array<any>) =>
            (item =
              arr.join("").substring(index, num) +
              arr.join("").substring(0, index))
        );
};

export default pattern;
