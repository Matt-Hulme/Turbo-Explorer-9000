export const CapitalizeFirstLetter = (word: string): string => {
  const lowercaseWords = ["and", "the", "of"];
  const lowercaseWord = word.toLowerCase();

  return lowercaseWords.includes(lowercaseWord)
    ? lowercaseWord
    : lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
};
