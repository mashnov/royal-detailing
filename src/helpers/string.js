export const replaceCurly = (string = '', replacements = {}) => {
  const from = Object.keys(replacements);
  let resultString = string;
  from.forEach((fromItem) => {
    resultString = resultString.replace(new RegExp(`{${fromItem}}`, 'gi'), replacements[fromItem]);
  });
  return resultString;
};
