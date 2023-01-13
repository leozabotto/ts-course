// Filter, map, reduce

// não afeta o array original
// Sempre retorna array com a mesma quantidade de el ou menos

// Retorne os números maiors que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*function callbackFilter(valor, indice, array) {
  return valor > 10 
}*/

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)


const pessoas = [
  { nome: 'Leo', idade: 18 },
  { nome: 'Maria', idade: 19 },
  { nome: 'Eduardo', idade: 48 },
  { nome: 'Letícia', idade: 55 },
  { nome: 'Rosana', idade: 43 },
  { nome: 'Wallace', idade: 21 },
]

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(p => p.nome.length >= 5)
console.log(pessoasComNomeGrande)

// Retorne as pessoas com mais de 50 anos
const pessoasComMaisDe50 = pessoas.filter(p => p.idade > 50)
console.log(pessoasComMaisDe50)

// Retorne as pessoas cujo nome termina com 'a'
const pessoasComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'))

console.log(pessoasComA)