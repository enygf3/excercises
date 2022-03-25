const flattenAndSort = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    item.forEach((el) => {
      newArr.push(el);
    });
  });

  return newArr.sort();
};

export default flattenAndSort;
