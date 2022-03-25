const flattenAndSort = (arr) => {
  return arr
    .filter((item) => item.length != 0)
    .flat()
    .sort();
};

export default flattenAndSort;
