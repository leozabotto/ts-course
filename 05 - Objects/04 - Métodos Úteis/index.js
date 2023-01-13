/*
  Object.values
  Object.entries
  Object.assign(target, source)
  Object.getOwnPropertyDescriptor(obj, 'prop')

  ... (spread)

  Object.keys
  Object.freeze
  Object.defineProperties
  Object.defineProperty
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const outraCoisa = produto

outraCoisa.nome = 'Leonardo'
console.log(produto)

console.log(Object.entries(produto))