// Existem várias formas de criar um objeto

// Método -> Função dentro de objeto

// this.incrementa

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  }
}

const pessoa1 = criaPessoa('Leo', 'Zabotto', 17)