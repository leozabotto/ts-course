/* eslint-disable */

// Tuple

const customerData1: readonly [number, string] = [1, 'Leo'];
const customerData2: [number, string, string] = [2, 'Leo', 'Zabotto'];
const customerData3: [number, string, string?] = [3, 'Leo'];
const customerData4: [number, string, ...string[]] = [3, 'Leo'];

// customerData1[0] = 100;
// customerData1[1] = 'Leo';
// customerData1.pop(); // readonly prevents this

console.log(customerData1);
console.log(customerData2);

// Readonly Array

const readonlyArray1: readonly string[] = ['Leo', 'Zabotto'];
const readonlyArray2: ReadonlyArray<string> = ['Leo', 'Zabotto'];

console.log(readonlyArray1);
console.log(readonlyArray2);

export {};
