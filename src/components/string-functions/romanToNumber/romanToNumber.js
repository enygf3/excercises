const romanToNumber = (number) => {
  let data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  return number.replace(/[MDCLXVI]/g, "").length === 0
    ? Array.from(number)
        .map((item) => data[item])
        .reduce((prev, item) => (prev >= item ? prev + item : item - prev), 0)
    : 0;
};

export default romanToNumber;
