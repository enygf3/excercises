const pattern = (num) => {
  let newArr = [];
  Array.from(Array(num).keys())
    .map((x) => (++x).toString())
    .forEach((item, index, arr) => {
      let str = "";
      str =
        arr.join("").substring(index, num) + arr.join("").substring(0, index);
      newArr.push(str);
    });

  return newArr;
};

export default pattern;
