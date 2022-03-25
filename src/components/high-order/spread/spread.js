const spread = (callback, arr) => {
  return callback.bind(arr)(arr);
};
export default spread;
