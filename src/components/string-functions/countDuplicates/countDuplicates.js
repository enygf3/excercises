const countDuplicates = (text) => {
  return text.length - Array.from(new Set(text.toLowerCase())).length;
};

export default countDuplicates;
