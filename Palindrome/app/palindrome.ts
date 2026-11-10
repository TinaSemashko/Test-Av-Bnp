export const palindrome = (input: string): string[] => {
  const isPalindrome = (word: string): boolean =>
    word === [...word].reverse().join("");

  const words = input
    .split(/\s+/)                                          // split by any whitespace
    .map((word) => word.replace(/[^\p{L}]/gu, "").toLowerCase()) // drop non-letters, lowercase
    .filter((word) => word.length >= 2 && isPalindrome(word));

  return [...new Set(words)]; // remove duplicates, keep first-appearance order
};