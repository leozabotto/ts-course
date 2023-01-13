// Map -> mapeia o array orginal
// Sempre altera o array Original



// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)
console.log(numeros)

//

const pessoas = [
  { nome: 'Leo', idade: 18 },
  { nome: 'Maria', idade: 19 },
  { nome: 'Eduardo', idade: 48 },
  { nome: 'Letícia', idade: 55 },
  { nome: 'Rosana', idade: 43 },
  { nome: 'Wallace', idade: 21 },
]

// Para cada elemento:

// Retorne apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(pessoa => pessoa.nome)
console.log(nomePessoa)

// Remova apenas a chave "nome" do objeto
const soIdade = pessoas.map(pessoa => ({idade: pessoa.idade}))

// Adicione uma chave id em cada objeto (id)
const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj }
  newObj.id = indice
  return newObj
})

console.log(comIds)