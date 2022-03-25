const romanToNumber = (number) => {
  let data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let value = 0;
  let romanValue = number.split("").forEach((item, index, arr) => {
    if (data[item] > data[arr[index]]) {
      value += data[item] - arr[index];
    } else {
      value += data[item];
    }
  });

  return value;
};

export default romanToNumber;
