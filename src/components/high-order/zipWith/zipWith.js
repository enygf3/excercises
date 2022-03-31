const zipWith = (func, arr1, arr2) => {
  return arr1.length > arr2.length
    ? arr1.slice(0, arr2.length).map((item, index) => func(item, arr2[index]))
    : arr1.map((item, index) => func(item, arr2[index]));
};

export default zipWith;
