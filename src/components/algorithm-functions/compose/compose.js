const compose = (arg, ...props) => {
  let arr = [...props];
  let value = 0;
  // let newArr = [];
  // arr.forEach((item) => {
  // 	newArr.push(item(arg));
  // });

  value = arr.reduce((prev, curr) => curr(prev));

  return value;
};

export default compose;
