import { describe, expect, it } from "vitest";
import { palindrome } from "../app/palindrome";

/*
 * Specification decisions:
 * 1. Only whole words are checked, not substrings (README: "hello" → [])
 * 2. Words shorter than 2 letters are not palindromes
 * 3. Case-insensitive; results are returned in lowercase
 * 4. Punctuation is ignored, as if it did not exist
 * 5. Repeated palindromes (case-insensitive) are returned once
 * 6. Extra spaces and empty "words" are ignored
 * 7. Results keep the order of first appearance
 */

describe("palindrome", () => {
  it.each([
    // README examples
    { input: "", expected: [], reason: "README example: empty string" },
    { input: "kayak", expected: ["kayak"], reason: "README example: single palindrome" },
    { input: "aa bb cc", expected: ["aa", "bb", "cc"], reason: "README example: several palindromes" },
    { input: "hello", expected: [], reason: "README example: no palindrome" },

    // Filtering
    { input: "aa hello bb", expected: ["aa", "bb"], reason: "keeps only palindromes in a sentence" },
    { input: "hello world", expected: [], reason: "sentence without palindromes" },

    // Minimum length
    { input: "h", expected: [], reason: "single letter is not a palindrome" },
    { input: "a aa", expected: ["aa"], reason: "single-letter word is skipped in a sentence" },

    // Case
    { input: "Kayak", expected: ["kayak"], reason: "case-insensitive, returned in lowercase" },
    { input: "RaDaR", expected: ["radar"], reason: "mixed case, returned in lowercase" },

    // Punctuation
    { input: "Kayak.", expected: ["kayak"], reason: "trailing period is ignored" },
    { input: "radar!", expected: ["radar"], reason: "trailing exclamation mark is ignored" },
    { input: "aa, bb", expected: ["aa", "bb"], reason: "comma after a word is ignored" },
    { input: "aa !! bb", expected: ["aa", "bb"], reason: "punctuation-only word is ignored" },
    // DECISION: punctuation is removed, not treated as a separator → "aabb", not a palindrome
    { input: "aa,bb", expected: [], reason: "punctuation without space does not split words" },

    // Duplicates and order
    { input: "Kayak kayak", expected: ["kayak"], reason: "repeated palindrome is returned once" },
    { input: "aa bb aa", expected: ["aa", "bb"], reason: "order of first appearance is kept" },

    // Spaces
    { input: " Kayak ", expected: ["kayak"], reason: "leading and trailing spaces are ignored" },
    { input: "aa  bb", expected: ["aa", "bb"], reason: "multiple spaces between words are ignored" },

    // DECISION: accented letters are letters, not punctuation
    { input: "été", expected: ["été"], reason: "accented letters are kept" },
  ])("'$input' → $expected ($reason)", ({ input, expected }) => {
    expect(palindrome(input)).toEqual(expected);
  });
});