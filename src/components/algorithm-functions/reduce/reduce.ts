const reduce = (
  arr: Array<any>,
  callback: Function,
  initialValue: any
): any => {
  let value: any = callback.toString().match(/[/*]/g) ? 1 : 0;

  if (
    arr &&
    !arr.includes(null) &&
    !arr.includes(undefined) &&
    !arr.includes(NaN)
  ) {
    arr.forEach((item: any) => {
      value = callback(item || initialValue, value);
    });

    return value || initialValue;
  } else {
    return initialValue;
  }
};

export default reduce;
