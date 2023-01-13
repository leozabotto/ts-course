const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(regExp1, 'Felipe'));

// grupos possuem este 'poder' especial -> p/cada grupo $n (ordem sequencial)
console.log(texto.replace(/(João|Maria)/gi, '"$1"'));

// é possível passar funções como parâmetro
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
);
