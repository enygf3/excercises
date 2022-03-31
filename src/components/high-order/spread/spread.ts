const spread = (callback: Function, arr: Array<any>): Array<any> => {
  return callback.bind(arr)(arr);
};
export default spread;
