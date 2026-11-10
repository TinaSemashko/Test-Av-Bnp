export const fizzbuzz = (n: number): string => {

let result = "";

if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
}

if (n % 3 === 0) result = result + "Fizz";
if (n % 5 === 0) result = result + "Buzz";


return result || String(n);

};


export const fizzbuzzStage2 = (n: number): string => {

let result = "";

if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
}

if (n % 3 === 0 ) result = result + "Fizz";
if (String(n).includes("3")) result = result + "Fizz";
if (n % 5 === 0 ) result = result + "Buzz";
if (String(n).includes("5")) result = result + "Buzz";


return result || String(n);

};
