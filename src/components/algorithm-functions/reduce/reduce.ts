const reduce = (arr: Array<any>, callback: Function, initialValue: any) => {
  let value: number = callback.toString().match(/[+-]/g) ? 0 : 1;
  arr.forEach((item: any) => {
    value = callback(item || initialValue, value);
  });
  return value || initialValue;
};

export default reduce;
