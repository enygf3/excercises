const countDuplicates = (text: string): number => {
  return text.length - Array.from(new Set(text.toLowerCase())).length;
};

export default countDuplicates;
