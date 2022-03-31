const maxTripletSum = (arr, count) => {
  return Array.from(new Set(arr.sort().reverse()))
    .slice(0, count)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
};

export default maxTripletSum;
