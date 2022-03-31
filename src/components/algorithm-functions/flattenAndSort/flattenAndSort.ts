const flattenAndSort = (arr: Array<any>, depth = 1): Array<any> => {
  return arr
    .filter((item: any) => item.length !== 0)
    .concat.apply([], arr)
    .sort();
};

export default flattenAndSort;
