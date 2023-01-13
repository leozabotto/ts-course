function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total)
}

// Function -> Arguments (array)

funcao(1, 2, 3, 4, 5, 6, 7);

// Valor padrão de parâmetros
// undefined como argumento == valor padrão

function valorPadrao(a = 0, b = 0) {
  console.log(a + b)
}

valorPadrao(2)

// Atribuição via desestruturação (obj e array)

function desestruturacao({ nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}

desestruturacao({nome: 'Leo', sobrenome: 'Z', idade: 17})

// Rest Operator

const conta = function(operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === '+') acumulador += num;
    if (operador === '-') acumulador -= num;
    if (operador === '/') acumulador /= num;
    if (operador === '*') acumulador *= num;
  }
  console.log(acumulador);
};

conta('+', 1, 20, 30, 40, 50);