const objectSort = (list: Array<any>, sortBy: any = "a"): Array<any> => {
  return list.sort((a: any, b: any) => {
    if (a[sortBy] < b[sortBy]) {
      return 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }
    return 0;
  });
};

export default objectSort;
