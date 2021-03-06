const romanToNumber = (number: string): number => {
  if (number) {
    enum data {
      M = 1000,
      D = 500,
      C = 100,
      L = 50,
      X = 10,
      V = 5,
      I = 1,
    }

    return number.replace(/[MDCLXVI]/g, "").length === 0
      ? Array.from(number)
          .map((item: any) => data[item])
          .reduce(
            (prev: any, item: any) =>
              prev >= item ? prev + item : item - prev,
            0
          )
      : 0;
  }

  return 0;
};

export default romanToNumber;
