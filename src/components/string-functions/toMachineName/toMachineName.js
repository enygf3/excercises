const toMachineName = (name, separator) => {
  return name.search(/[0-9]/g) != 0
    ? name
        .split(" ")
        .join(separator)
        .toLowerCase()
        .replace(/[.!?,%]/g, "")
    : toMachineName(name.substring(1, name.length), separator);
};

export default toMachineName;
