// Declaração de função (Function Hoisting)
falaOi();

function falaOi() {
  console.log('Oi');
}

// First-class objects (Objetos de Primeira Classe)
// Function Expression
const souUmDado = function () {
  console.log('Sou um dado.');
}

souUmDado();

// Função como parâmetro
function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo:');
  funcao();
}

executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
}

obj.falar();