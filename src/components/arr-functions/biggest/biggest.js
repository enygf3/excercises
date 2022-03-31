const biggest = (arr) => {
  return arr
    .map((item) => item.toString())
    .join("")
    .split("")
    .sort()
    .reverse()
    .join("");
};

export default biggest;
