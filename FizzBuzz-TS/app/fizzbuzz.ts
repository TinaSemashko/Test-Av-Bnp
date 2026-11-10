export const fizzbuzz = (n: number): string => {
    // if (i % 15 === 0) {
    //     return "FizzBuzz";
    // } else if (i % 3 === 0) {
    //     return "Fizz";
    // } else if (i % 5 === 0) {
    //     return "Buzz";
    // } else {
    //     return i.toString();
    // }

let result = "";

if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
}

if (n % 3 === 0) result = result + "Fizz";
if (n % 5 === 0) result = result + "Buzz";


return result || String(n);

};

