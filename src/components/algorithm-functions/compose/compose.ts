const compose = (...fns: any) => {
  return (...args: any) => {
    return fns.reduceRight((acc: any, fn: any) => fn(acc), args);
  };
};

export default compose;
