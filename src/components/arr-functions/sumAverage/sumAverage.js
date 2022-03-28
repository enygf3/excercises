const sumAverage = (...arr) => {
  return arr.reduce(
    (previousValue, currentValue, index, array) =>
      currentValue.reduce((previousValue, currentValue) =>
        Math.floor(currentValue + previousValue)
      ) / array.length
  );
};

export default sumAverage;
