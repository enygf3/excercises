function zipWith(
  func: Function,
  arr1: Array<any>,
  arr2: Array<any>
): Array<any> {
  if (arguments.length === 3) {
    return arr1.length > arr2.length
      ? arr1
          .slice(0, arr2.length)
          .map((item: any, index: number) => func(item, arr2[index]))
      : arr1.map((item: any, index: number) => func(item, arr2[index]));
  } else if (func && arr1) {
    return arr1.map((item: any) => func(item));
  } else {
    return [];
  }
}

export default zipWith;
