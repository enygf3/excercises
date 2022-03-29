const biggest = (arr) => {
  return arr
    .map((item) => item.toString())
    .join("")
    .sort()
    .reverse()
    .join("");
};

export default biggest;
