const alphabetized = (text) => {
  let newText = "";
  newText = text
    .split(" ")
    .join("")
    .replace(/[.!?,;:%]/g, "");

  const sortText = (str) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  return sortText(newText);
};

export default alphabetized;
