const sumAverage = (...arr) => {
  let value = 0;
  let count = 0;
  arr.forEach((item) => {
    item.forEach((el) => {
      value += el;
      count++;
    });
  });

  return Math.floor(value / count);
};

export default sumAverage;
