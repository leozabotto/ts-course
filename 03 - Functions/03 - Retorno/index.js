// return -> retorna valor, termina função

// sem return ==> undefined

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome, }
}

console.log(criaPessoa('Leo','Z'))


// Função retorna função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá')
const resto = olaMundo('mundo!');
console.log(resto);

function criaMultiplicador (multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}

const duplica =  criaMultiplicador(2);
const triplica =  criaMultiplicador(3);
const quadriplica =  criaMultiplicador(4);
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))