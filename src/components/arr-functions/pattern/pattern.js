const pattern = (num) => {
  return Array.from(Array(num).keys())
    .map((x) => (++x).toString())
    .map(
      (item, index, arr) =>
        (item =
          arr.join("").substring(index, num) + arr.join("").substring(0, index))
    );
};

export default pattern;
