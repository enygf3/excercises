const toMachineName = (name: string, separator: string): string => {
  return name.search(/[0-9]/g) !== 0
    ? name
        .replace(/[.!?,%]/g, " ")
        .split(" ")
        .filter((item: string) => item !== "")
        .join(separator)
        .toLowerCase()
    : toMachineName(name.substring(1, name.length), separator);
};

export default toMachineName;
