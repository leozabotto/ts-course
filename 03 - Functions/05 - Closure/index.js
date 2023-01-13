function retornaFuncao() {
  const nome = 'Leo';
  return function() {
    return nome;
  }
}

const funcao = retornaFuncao()
console.dir(funcao)

console.log(funcao())

