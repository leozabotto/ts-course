const { alfabeto } = require('./base');

// [abc] -> conjunto (sets)
console.log(alfabeto);
console.log(alfabeto.match(/[^abc123]+/g));

// [0-9] -> range (menor para o maior)
// [a-z] [A-Z] [a-zA-Z0-9]
// [min-maxANY-THING]
// [^min-maxANY-THING] -> menos isso (negação)
console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));

// Para caracteres unicode -> utilizar o código com [\uXXXXX] onde X = caractere
// unicode

console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));

// Shorthands (vide documentação)
console.log(alfabeto.match(/[\w+]/g));
console.log(alfabeto.match(/[\W+]/g));
console.log(alfabeto.match(/[\d+]/g));
console.log(alfabeto.match(/[\D+]/g));
console.log(alfabeto.match(/[\s+]/g));
console.log(alfabeto.match(/[\S+]/g));
