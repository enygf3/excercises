const objectSort = (list, sortBy) => {
  let newArr = [];

  list.forEach((element) => {
    newArr.push(element);
  });
  newArr.forEach((element, id, arr) => {
    newArr.forEach((item, index) => {
      if (item[sortBy] < element[sortBy]) {
        [arr[id], arr[index]] = [arr[index], arr[id]];
      }
    });
  });

  return newArr;
};

export default objectSort;
