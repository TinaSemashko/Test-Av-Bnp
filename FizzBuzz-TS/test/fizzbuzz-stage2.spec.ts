import { describe, expect, it } from "vitest";
import  {fizzbuzzStage2 as fizzbuzz } from "../app/fizzbuzz";

describe("fizzbuzz stage 2", () => {

it.each([
  { input: 1,  expected: "1", reason: "not divisible by 3 or 5 and doesn't have 3 or 5 as a digit" },
  { input: 7,  expected: "7", reason: "not divisible by 3 or 5 and doesn't have 3 or 5 as a digit" },

  { input: 6,  expected: "Fizz", reason: "divisible by 3 and doesn't have 3 or 5 as a digit" },
  { input: 13, expected: "Fizz", reason: "contains 3 and not divisible by 3 or 5" },

  { input: 10, expected: "Buzz", reason: "divisible by 5 and doesn't have 3 or 5 as a digit" },
  { input: 52, expected: "Buzz", reason: "contains 5 and not divisible by 3 or 5" },

  { input: 51, expected: "FizzBuzz", reason: "divisible by 3 and have 5 as a digit" },
  { input: 53, expected: "FizzBuzz", reason: "not divisible by 3 or 5 and have 3 and 5 as a digit" },

  { input: 5, expected: "BuzzBuzz", reason: "contains 5 and divisible by 5" },
  { input: 55, expected: "BuzzBuzz", reason: "contains 5 and divisible by 5" },

  { input: 3, expected: "FizzFizz", reason: "divisible by 3 and have 3 as a digit" },
  { input: 33, expected: "FizzFizz", reason: "divisible by 3 and have 3 as a digit" },

  { input: 15, expected: "FizzBuzzBuzz", reason: "divisible by 3 and 5 and have 5 as a digit" },
  { input: 35, expected: "FizzBuzzBuzz", reason: "divisible by 5 and have 3 and5 as a digit" },

  { input: 30, expected: "FizzFizzBuzz", reason: "divisible by 3 and 5 and have 3 as a digit" },

  { input: 135, expected: "FizzFizzBuzzBuzz", reason: "divisible by 3 and 5 and  have 3 and 5 as a digit" },

  ])("$input → $expected ($reason)", ({ input, expected }) => {
    expect(fizzbuzz(input)).toBe(expected);
  });

  it.each([-1, 1.5, 0, NaN])("returns error for invalid number %s", (n) => {
    expect(() => fizzbuzz(n)).toThrowError("Input must be a positive integer");
  });
  

});