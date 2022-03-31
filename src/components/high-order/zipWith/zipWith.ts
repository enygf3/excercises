const zipWith = (
  func: Function,
  arr1: Array<any>,
  arr2: Array<any>
): Array<any> => {
  return arr1.length > arr2.length
    ? arr1
        .slice(0, arr2.length)
        .map((item: any, index: number) => func(item, arr2[index]))
    : arr1.map((item: any, index: number) => func(item, arr2[index]));
};

export default zipWith;
