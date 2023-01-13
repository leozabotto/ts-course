const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Zabotto',
  idade: 17,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

const { nome = 'padrão', sobrenome, endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome, rua, numero)