const pessoa1 = {
  nome: 'Leo',
  sobrenome: 'Z'
}
console.log(pessoa1.nome) // ou [ ]

const pessoa2 = new Object()
pessoa2.nome = 'Cris'

// Função Construtora / Função Fábrica / Classes (Syntax Sugar)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// New = { } <- this
const p1 = new Pessoa('Leo', 'Z')
console.log(p1)

// Object.freeze(obj)