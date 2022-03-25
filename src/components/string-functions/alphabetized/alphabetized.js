const alphabetized = (text) => {
  const sortText = (str) =>
    str
      .replace(/[.!?,;:%]/g, "")
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  return sortText(text);
};

export default alphabetized;
