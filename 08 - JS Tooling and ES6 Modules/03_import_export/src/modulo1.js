// export const nome = 'Leo
// Pode usar o export diretamente

const nome = 'Leo'
const sobrenome = 'Zabotto'
const idade = 18
const cpf = 'XXX.XXX.XXX-XX'

function soma(x, y) {
  return x + y
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

export { nome, sobrenome, idade, soma }