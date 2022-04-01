function spread(callback: Function, arr: Array<any>): void {
  return callback.bind(arr)(arr);
}
export default spread;
