const reduce = (arr, callback, initialValue) => {
  let value;

  arr.forEach((item) => {
    value = callback(item || initialValue, value);
  });

  return value || initialValue;
};

export default reduce;
