export const CapitalizeFirstLetter = (input: string): string => {
  const lowercaseWords = ["and", "the", "of"];
  return input
    .split(" ")
    .map((word) => {
      const lowercaseWord = word.toLowerCase();
      return lowercaseWords.includes(lowercaseWord)
        ? lowercaseWord
        : lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
    })
    .join(" ");
};
