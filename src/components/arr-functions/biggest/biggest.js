const biggest = (arr) => {
  return Array.from(arr.map((item) => item.toString()).join(""))
    .sort()
    .reverse()
    .join("");
};

export default biggest;
