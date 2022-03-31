const multiplyAll = (arr: Array<any>, mult: number): any => {
  if (arr && mult) {
    return arr.map((item: number) => item * mult);
  } else {
    return null;
  }
};

export default multiplyAll;
