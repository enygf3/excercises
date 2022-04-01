function flattenAndSort(arr: Array<any>): Array<any> {
  return arr
    .reduce((acc: any, item: any) => {
      if (Array.isArray(item)) {
        return acc.concat(flattenAndSort(item));
      } else {
        return acc.concat(item);
      }
    }, [])
    .sort((a: number, b: number) => a - b);
}

export default flattenAndSort;
