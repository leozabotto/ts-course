/*eslint-disable*/

// Basic Types (type inference)

let name: string = 'Leo'; // any type of strings: '' "" ``
let age: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let isAdult: boolean = true; // true ou false
let symbol: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfStrings: string[] = ['a', 'b'];

// Objects
// ? -> optional
let person: { name: string; age: number; isAdult?: boolean } = {
  name: 'Leonardo',
  age: 19,
  isAdult: true,
};

// Functions

function sum(x: number, y: number): number {
  return x + y;
}

// Type Inference (Function):
const result = sum(2, 2); // undestands that the return is a number

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export {};
