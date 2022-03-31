const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((acc, fn) => fn(acc), args);
  };
};

export default compose;
