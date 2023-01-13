// Retorne a soma do sobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros.filter(valor => valor % 2 === 0)
const dobro = numeros.map(valor => valor * 2)
const soma = dobro.reduce((ac, valor) => ac += valor)

// É possível encadear:
// const pares = numeros.filter(valor => valor % 2 === 0).map...

console.log(soma)