const biggest = (arr: Array<any>): string => {
  return arr
    .map((item: any) => item.toString())
    .join("")
    .split("")
    .sort()
    .reverse()
    .join("");
};

export default biggest;
