/* eslint-disable */

let x = 10;
x = 0b1010;
// x = 'Leo'

// literal

const y = 10;

// let a: 100 = 100;
let a = 100 as const;

// a = 120 -> cannot do this

const person = {
  name: 'Leo' as const,
  lastName: 'Zabotto',
};
