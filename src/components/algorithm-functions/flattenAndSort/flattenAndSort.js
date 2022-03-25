const flattenAndSort = (arr, depth = 1) => {
  return arr
    .filter((item) => item.length != 0)
    .flat(depth)
    .sort();
};

export default flattenAndSort;
