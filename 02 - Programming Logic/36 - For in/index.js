// For in -> lê os índices ou chves do array/obj

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Zabotto',
  idade: 17
};

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
