function flattenAndSort(arr: Array<any>): any {
  if (
    Array.isArray(arr) &&
    !arr.includes(NaN) &&
    !arr.includes(Infinity) &&
    !arr.includes(null) &&
    !arr.includes(undefined)
  ) {
    return arr
      .reduce((acc: any, item: any) => {
        if (Array.isArray(item)) {
          return acc.concat(flattenAndSort(item));
        } else {
          return acc.concat(item);
        }
      }, [])
      .sort((a: number, b: number) => a - b);
  } else {
    return null;
  }
}

export default flattenAndSort;
