// Some todos os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  return acumulador += valor
}, 0) // 0 -> valor inicial do acumulador

console.log(total)

// Retorne um array com os pares (filter) 
const pares = numeros.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 == 0) acumulador.push(valor)
  return acumulador
}, [])

console.log(pares)

// Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador.push(valor * 2)
  return acumulador
}, [])

const pessoas = [
  { nome: 'Leo', idade: 18 },
  { nome: 'Maria', idade: 19 },
  { nome: 'Eduardo', idade: 48 },
  { nome: 'Letícia', idade: 55 },
  { nome: 'Rosana', idade: 43 },
  { nome: 'Wallace', idade: 21 },
]

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador, valor){
  if (valor.idade > acumulador.idade) return valor
  return acumulador
})

console.log(maisVelha)