const reduce = (arr: Array<any>, callback: Function, initialValue: any) => {
  let value: any;

  arr.forEach((item: any) => {
    value = callback(item || initialValue, value);
  });

  return value || initialValue;
};

export default reduce;
