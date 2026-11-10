import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../app/fizzbuzz";

describe("fizzbuzz", () => {
    it.each([
        [1, "1"],
        [7, "7"],
        ])("returns %s as a string when not divisible by 3 or 5", (input, expected) => { expect(fizzbuzz(input)).toBe(expected); });

    it.each([3, 6, 9])("returns 'Fizz' when the number is divisible by 3", (n) => {
      expect(fizzbuzz(n)).toBe("Fizz");
    });

    it.each([5, 10])("returns 'Buzz' when the number is divisible by 5", (n) => {
      expect(fizzbuzz(n)).toBe("Buzz");
    });

    it.each([15, 45])("returns 'FizzBuzz' when the number is divisible by 15", (n) => {
      expect(fizzbuzz(n)).toBe("FizzBuzz");
    });


    it.each([-1, 1.5, 0, NaN])("returns error for invalid number %s", (n) => {
        expect(() => fizzbuzz(n)).toThrowError("Input must be a positive integer");
    });
  

});