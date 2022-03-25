const reduce = (arr, callback, initialValue) => {
  let value;

  arr.forEach((item) => {
    value = callback(item, value);
  });

  return value || initialValue;
};

export default reduce;
