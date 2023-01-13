/* eslint-disable */

// T -> Generic (replace with desired type)
// Array <T> - T[]

function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value, '');
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

// type inference
const result = multiplyArgs(1, 2, 3);
console.log(result);

const result2 = concatStrings('A', 'B', 'C');
console.log(result2);

const result3 = toUpperCase('d', 'e', 'f');
console.log(result3);

export {};
