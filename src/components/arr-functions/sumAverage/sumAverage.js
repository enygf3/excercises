const sumAverage = (...arr) => {
  return arr.reduce(
    (previousValue, currentValue, index, array) =>
      currentValue.reduce((previousValue, currentValue, index, array) =>
        Math.floor(currentValue + previousValue)
      ) / array.length
  );
};

export default sumAverage;
