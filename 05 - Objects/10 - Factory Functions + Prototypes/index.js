const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  },
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  },
}

const pessoaPrototype = { ...falar, ...comer }
// Object.assign({}, falar, comer)

function criaPessoa(nome, sobrenome) {
  
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome}
  })
}

const p1 = criaPessoa('Leo','Z')
console.log(p1)
p1.falar()