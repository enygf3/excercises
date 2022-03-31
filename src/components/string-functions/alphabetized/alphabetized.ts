const alphabetized = (text: string): string => {
  const sortText = (str: any): any =>
    str
      .replace(/[.!?,;:%]/g, "")
      .split("")
      .sort((a: string, b: string): any => a.localeCompare(b))
      .join("");

  return sortText(text);
};

export default alphabetized;
