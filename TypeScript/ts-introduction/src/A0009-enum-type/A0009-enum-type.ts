/* eslint-disable */

// "father" of all the other types
// comes before 'any' type

// it's like 'any', but more secure

let x: unknown;
x = 100;
x = 'Leo';
x = 900;
x = '10';

const y = 800;

if (typeof x === 'number') console.log(x + y);

export {};
