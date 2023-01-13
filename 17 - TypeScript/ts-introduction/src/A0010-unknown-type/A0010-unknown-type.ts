/* eslint-disable */

enum Colors {
  Red, // 0
  Blue, // 1
  Yellow, // 2
  Purple = 'PURPLE',
}

enum Colors2 {
  Red = 100, // 0
  Blue = 300, // 1
  Yellow = 200,
  Purple = 'PURPLE',
  Green = 201, // initializer
  White,
}

// Concat with Colors2 enum
enum Colors2 {
  Pink,
}

// console.log(Colors);
console.log(Colors.Red);
console.log(Colors[0]);

console.log(Colors2[0]); // undefined

function chooseAColor(color: keyof typeof Colors): void {
  console.log(Colors[color]);
}

console.log(chooseAColor('Red'));

export {};
