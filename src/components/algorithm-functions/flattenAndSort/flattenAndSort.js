const flattenAndSort = (arr, depth = 1) => {
  return arr
    .filter((item) => item.length !== 0)
    .concat.apply([], arr)
    .sort();
};

export default flattenAndSort;
