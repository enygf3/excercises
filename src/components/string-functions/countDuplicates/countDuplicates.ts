const countDuplicates = (text: string): number => {
  return text
    ? text.length - Array.from(new Set(text.toLowerCase())).length
    : 0;
};

export default countDuplicates;
